import "../../App.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import importerImg from "../../Assets/Images/ImporterLoginImg.jpg";
import { useState } from "react";
import { Alert, Box, IconButton, InputAdornment, Modal, Snackbar, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import auth from "../../Firebase/FireBase";
import OTPInput from "otp-input-react";

const Login = () => {

    // snackbar
    const [snackBarVisibility, setSnackBarVisibility] = useState(false);
    const [snackBarMessage, setSnackBarMessage] = useState("Test Message");
    const [snackBarType, setSnackBarType] = useState("success");


    const customSnackBar = () => (
        <Snackbar open={snackBarVisibility} autoHideDuration={6000} onClose={() => setSnackBarVisibility(false)}>
            <Alert onClose={() => setSnackBarVisibility(false)} severity={snackBarType} sx={{ width: '100%' }}>
                {snackBarMessage}
            </Alert>
        </Snackbar>
    );


    const [loginData, setLoginData] = useState({});
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();


    // modal state
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    // reset password email
    const [email, setEmail] = useState("");

    //  loading state
    const [resetLoading, setResetLoading] = useState(false);
    const [verifyOtpLoading, setVerifyOtpLoading] = useState(false);

    // modal styles
    const style = {

        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        // border: '1px solid #000',
        boxShadow: 0,
        p: 4,
        borderRadius: "5px"
    };


    // fetchedPhoneState
    const [fetchedPhone, setFetchedPhone] = useState("");
    const [showOtpField, setShowOtpField] = useState(false);

    // show Email Field
    const [isShowEmail, setIsShowEmail] = useState(true);

    // OTP
    const [OTP, setOTP] = useState("");
    const [isOtpVerified, setIsOtpVerified] = useState(false);

    // new pass
    const [newPassword, setNewPassword] = useState("");
    const [changePasswordLoading, setChangePasswordLoading] = useState(false);

    function onInputChange(e) {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    function loginUser() {
        console.log(loginData);
        // Reset the loginData state to empty object after logging the data
    }



    // forgot pass OTP
    const sendOtp = () => {



        const authFirebase = auth;

        const appVerifier = window.recaptchaVerifier;
        const phoneNumber = `+${fetchedPhone}`;
        const number = "XXXXXXX" + fetchedPhone.substring(9, 12);
        signInWithPhoneNumber(authFirebase, phoneNumber, appVerifier)
            .then((confirmationResult) => {

                setIsShowEmail(false);
                setResetLoading(false);
                setShowOtpField(true);
                // showing snackbar
                setSnackBarMessage(`OTP sent on ${number}`);
                setSnackBarType("success");
                setSnackBarVisibility(true);
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                const recaptchaContainer = document.getElementById('recaptcha-container');

                recaptchaContainer.replaceChildren();
                // ...
            }).catch((error) => {
                setResetLoading(false)
                const recaptchaContainer = document.getElementById('recaptcha-container');

                if (error.code == "auth/too-many-requests") {
                    setSnackBarMessage(`Too Many Attempts, Try Again Later`);
                    setSnackBarType("error");
                    setSnackBarVisibility(true);
                } else {
                    // showing snackbar
                    setSnackBarMessage(`Error Sending OTP, Try Again`);
                    setSnackBarType("error");
                    setSnackBarVisibility(true);
                }


                recaptchaContainer.replaceChildren();
                console.log(error);
            });
    }
    function resetPassword() {


        const checkEmailAndSendOtp = async () => {
            setResetLoading(true);
            try {
                const config = {
                    headers: {
                        "content-type": "application/json"
                    }
                }
                const response = await axios.post(
                    "http://localhost:4000/checkEmailExists",
                    {
                        userEmail: email
                    },
                    config

                );
                setFetchedPhone(response.data.phone)


                try {


                    const recaptchaContainer = document.getElementById('recaptcha-container');

                    recaptchaContainer.replaceChildren();



                    window.recaptchaVerifier = new RecaptchaVerifier(auth, recaptchaContainer, {

                        'size': 'normal',  // Use 'normal' size for a visible reCAPTCHA
                        'callback': (response) => {

                            // Callback function when reCAPTCHA is successfully solved
                            console.log("Captcha Verified");
                            sendOtp();


                        },
                        'expired-callback': () => {
                            setResetLoading(false);

                            // Callback function when reCAPTCHA expires
                            console.log("Captcha verification expired");

                        }
                    });

                    // Render the reCAPTCHA explicitly
                    window.recaptchaVerifier.render();
                } catch (e) {
                    console.log(e);
                }
                // trying to verify captcha

            } catch (e) {
                setSnackBarMessage(e.response.data.msg);
                setSnackBarType("error");
                setSnackBarVisibility(true);
                setResetLoading(false);

            }
        }

        checkEmailAndSendOtp();
        // setResetLoading(true);


    }

    const verifyOtp = async () => {

        setVerifyOtpLoading(true);

       window.confirmationResult.confirm(OTP).then((result) => {

            // loading of verify otp button
            setVerifyOtpLoading(false);

            // User verified in successfully.

            setShowOtpField(false);
            setSnackBarMessage(`Verification Successfull`);
            setSnackBarType("success");

            setSnackBarVisibility(true);

            // otp verified showing field to enter new pass
            setIsOtpVerified(true);
            // emptying otp state
            setOTP("");


            // ...
        }).catch((error) => {
            setVerifyOtpLoading(false);
            console.log(error);
            setSnackBarMessage(`Wrong OTP, Try Again`);
            setSnackBarType("error");
            setSnackBarVisibility(true);
        });
    }

    const changePasswordFinal = async () => {
        const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        if (!newPassword.match(passRegex)) {
            setSnackBarMessage("Weak Password: Minimum eight characters, at least one letter, one number, and one special character are required");
            setSnackBarType("error");
            setSnackBarVisibility(true);
            setNewPassword("");
        } else {
            try {
                setChangePasswordLoading(true);
                const config = {
                    headers: {
                        "content-type": "application/json"
                    }
                }
                const response = await axios.post("http://localhost:4000/changeImporterPassword", {
                    importerEmail: email,
                    importerChangedPassword: newPassword
                }, config);
                setChangePasswordLoading(false);
                setSnackBarMessage(response.data.msg);
                setSnackBarType("success");
                setSnackBarVisibility(true);
                setOpen(false);
                navigate(0)


            } catch (error) {
                setChangePasswordLoading(false);
                setSnackBarMessage(error.response.data.msg);
                setSnackBarType("error");
                setSnackBarVisibility(true);
            }
        }
    }


    return (

        <div className="flex flex-row w-full h-full bg-[#FCFCFC] login-container">

            {customSnackBar()}
            {/* form container */}
            <div className=" p-5  sm:p-16 sm:basis-1/2  flex-col  login-box">

                <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-4xl tracking-widest font-poppins">
                    Open The Door To Global
                    Trade Possibilities With <span className="font-medium text-[#2C83EC] ">AVM Traders</span>

                </h1>




                <div className="flex flex-col mt-10 gap-4 sm:mt-18 sm:gap-6 ">
                    <h1 className="text-2xl mb-4 sm:text-3xl md:text-3xl lg:text-4xl font-medium font-poppins">
                        Let's <span className="text-[#2C83EC]	font-medium"> Sign You In !</span>
                    </h1>


                    <TextField type="email" label="Email Address" onChange={
                        (e) => {
                            onInputChange(e);
                        }
                    } required>

                    </TextField>

                    <TextField onChange={
                        (e) => {
                            onInputChange(e);
                        }
                    } InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => {
                                    setShowPassword((previous) => (!previous));
                                }}>
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }} type={showPassword ? "password" : "text"} label="Password" sx={{
                        marginBottom: "-10px"
                    }} required>

                    </TextField>

                    <div className="flex justify-end cursor-pointer text-sm font-roboto font-normal">
                        <p onClick={() => {
                            setOpen(true)
                        }}>Forgot Password?</p>
                    </div>

                    <Button type="submit" style={
                        {
                            backgroundColor: "#2C83EC",
                            fontFamily: "Poppins",
                        }
                    } variant="contained" onClick={loginUser} disableElevation size="large">

                        SIGN IN

                    </Button>



                </div>

                {/* forgot password modal */}

                <Modal

                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="text-center" sx={style}>

                        {isShowEmail && <>
                            <TextField

                                type="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}

                                sx={{
                                    marginTop: "20px"
                                }} fullWidth label="Email Address" />
                            <LoadingButton loading={resetLoading} onClick={resetPassword} sx={{
                                margin: "10px"
                            }}> Reset Password </LoadingButton>
                        </>
                        }



                        <>

                            <div style={{ textAlign: "center" }} className="my-4" id="recaptcha-container"></div>

                            {showOtpField && <div>
                                <hr className="m-4" />
                                OTP has been sent to <b>{"XXXXXXX" + fetchedPhone.substring(9, 12)}</b>

                                <br />
                                <h1 className="my-4 font-medium text-xl">
                                    Enter OTP
                                </h1>

                                <div className="bg-slate-200 p-5 items-center flex flex-row justify-center rounded-md shadow-md">
                                    <OTPInput
                                        autoFocus
                                        value={OTP}
                                        onChange={(e) => setOTP(e)}
                                        OTPLength={6}
                                        otpType="number"
                                        disabled={false}
                                    />

                                </div>
                                <LoadingButton loading={verifyOtpLoading} onClick={verifyOtp} sx={{
                                    margin: "10px"
                                }}> Verify OTP </LoadingButton>

                            </div>}

                            {isOtpVerified && <div>
                                <TextField onChange={(e) => {
                                    setNewPassword(e.target.value);
                                }} InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => {
                                                setShowPassword((previous) => (!previous));
                                            }}>
                                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }} type={showPassword ? "password" : "text"} label="Password" sx={{
                                    marginBottom: "-10px"
                                }} required>

                                </TextField>
                                <LoadingButton loading={changePasswordLoading} onClick={changePasswordFinal} sx={{
                                    margin: "10px"
                                }}> Change Password </LoadingButton>

                            </div>}

                            <div>

                            </div>
                        </>


                    </Box>


                </Modal>

                <p className="font-roboto text-sm text-center mt-6">
                    Don't Have an Account ?<b> <span className="text-[#2C83EC]" style={{
                        cursor: "pointer",
                    }} onClick={() => {
                        navigate("/importer/signup")
                    }} > Sign Up </span></b>
                </p>

            </div>


            {/* image container */}
            <div className="hidden  sm:basis-1/2 md:block p-7 image-box">


                <img src={importerImg} className="login-img" alt="" />
            </div>
        </div>
    )
}

export default Login;

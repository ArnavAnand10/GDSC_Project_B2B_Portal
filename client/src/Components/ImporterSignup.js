import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IconButton, InputAdornment, Stepper, Step, StepLabel, Snackbar, Alert, MenuItem } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import importerImg from "../../src/Assets/Images/ImporterLoginImg.jpg"
import ReactPhoneInput from 'react-phone-input-material-ui';
import OTPInput from "otp-input-react";
import { useFormContext } from "./Contexts/FormContext";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import auth from "../Firebase/FireBase";
import LoadingButton from '@mui/lab/LoadingButton';


const ImporterSignup = () => {
    const [showPassword, setShowPassword] = useState(true);
    const steps = [
        'Personal Details',
        'Address & Contact Details',
        'Verify Phone Number',
    ];
    const [stepNumber, setStepNumber] = useState(0);

    const PersonalDetailsForm = () => {
        const [snackBarVisibility, setSnackBarVisibility] = useState(false);
        const [snackBarMessage, setSnackBarMessage] = useState("Test Message");
        const [snackBarType, setSnackBarType] = useState("success");

        const { formValues, updateFormValue } = useFormContext();

        const handleFormValues = (e) => {
            const { name, value } = e.target;
            updateFormValue(name, value);
        };

        const customSnackBar = () => (
            <Snackbar open={snackBarVisibility} autoHideDuration={6000} onClose={() => setSnackBarVisibility(false)}>
                <Alert onClose={() => setSnackBarVisibility(false)} severity={snackBarType} sx={{ width: '100%' }}>
                    {snackBarMessage}
                </Alert>
            </Snackbar>
        );

        return (
            <>
                {customSnackBar()}
                <TextField
                    type="text"
                    value={formValues.fullName || ''}
                    name="fullName"
                    label="Full Name"
                    onChange={handleFormValues}
                    required
                />
                <TextField
                    type="text"
                    value={formValues.gender || ''}
                    name="gender"
                    label="Gender"
                    onChange={handleFormValues}
                    required
                />
                <TextField
                    type="email"
                    value={formValues.email || ''}
                    name="email"
                    label="Email Address"
                    onChange={handleFormValues}
                    required
                />
                <TextField
                    name="password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    type={showPassword ? "password" : "text"}
                    value={formValues.password || ''}
                    label="Password"
                    sx={{ marginBottom: "-10px" }}
                    onChange={handleFormValues}
                    required
                />
                <Button
                    type="submit"
                    style={{ marginTop: "10px", backgroundColor: "#2C83EC", fontFamily: "Poppins" }}
                    onClick={() => {
                        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                        const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
                        if (!formValues.fullName || !formValues.email || !formValues.gender || !formValues.password) {
                            setSnackBarMessage("All Fields Are Required");
                            setSnackBarType("error");
                            setSnackBarVisibility(true);
                        } else if (!formValues.password.match(passRegex)) {
                            setSnackBarMessage("Weak Password : Minimum eight characters, at least one letter, one number and one special character is Required");
                            setSnackBarType("error");
                            setSnackBarVisibility(true);
                        } else if (!formValues.email.match(emailRegex)) {
                            setSnackBarMessage("Enter Valid Email");
                            setSnackBarType("error");
                            setSnackBarVisibility(true);
                        } else {
                            setStepNumber((prev) => prev + 1);
                        }
                    }}
                    variant="contained"
                    disableElevation
                    size="large"
                >
                    NEXT
                </Button>
                <p className="font-roboto text-sm text-center">
                    Already A User?<b> <span className="text-[#2C83EC]"> Sign In </span></b>
                </p>
            </>
        );
    };

    const AddressAndContactDetailsForm = () => {
        const { formValues, updateFormValue } = useFormContext();

        const handleFormValues = (e) => {
            const { name, value } = e.target;
            updateFormValue(name, value);
        };

        const [snackBarVisibility, setSnackBarVisibility] = useState(false);
        const [snackBarMessage, setSnackBarMessage] = useState("Test Message");
        const [snackBarType, setSnackBarType] = useState("success");

        const cities = ['City1', 'City2', 'City3']; // Add your cities here
        const states = ['State1', 'State2', 'State3']; // Add your states here

        const customSnackBar = () => (
            <Snackbar open={snackBarVisibility} autoHideDuration={6000} onClose={() => { setSnackBarVisibility(false) }}>
                <Alert onClose={() => { setSnackBarVisibility(false) }} severity={snackBarType} sx={{ width: '100%' }}>
                    {snackBarMessage}
                </Alert>
            </Snackbar>
        );

        return (
            <>
                {customSnackBar()}
                <TextField
                    type="text"
                    name="fullAddress"
                    value={formValues.fullAddress || ''}
                    onChange={handleFormValues}
                    label="Flat, House No., Building, Company, Apartment"
                    required
                />
                <TextField
                    type="text"
                    name="area"
                    value={formValues.area || ''}
                    onChange={handleFormValues}
                    label="Area, Street, Sector, Village"
                    required
                />
                <TextField
                    type="text"
                    name="landmark"
                    value={formValues.landmark || ''}
                    onChange={handleFormValues}
                    label="Landmark (If Any)"
                />
                <div className="flex flex-row justify-normal gap-10">
                    <TextField
                        select
                        name="city"
                        value={formValues.city || ''}
                        onChange={handleFormValues}
                        label="City"
                        required
                    >
                        {cities.map((city) => (
                            <MenuItem key={city} value={city}>
                                {city}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        select
                        name="state"
                        value={formValues.state || ''}
                        onChange={handleFormValues}
                        label="State"
                        required
                    >
                        {states.map((state) => (
                            <MenuItem key={state} value={state}>
                                {state}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        type="text"
                        name="zipCode"
                        value={formValues.zipCode || ''}
                        onChange={handleFormValues}
                        label="Zip Code"
                        required
                    />
                </div>
                <ReactPhoneInput
                    value={formValues.phone || ''}
                    onChange={(newValue) => updateFormValue("phone", newValue)}
                    component={TextField}
                />
                <Button
                    type="submit"
                    style={{
                        backgroundColor: "#2C83EC",
                        fontFamily: "Poppins",
                    }}
                    onClick={() => {
                        if (!formValues.fullAddress || !formValues.area || !formValues.zipCode || !formValues.state || !formValues.phone) {
                            setSnackBarMessage("All Fields Are Required");
                            setSnackBarType("error");
                            setSnackBarVisibility(true);
                        } else {
                            setStepNumber((prev) => prev + 1);
                        }
                    }}
                    variant="contained"
                    disableElevation
                    size="large"
                >
                    NEXT
                </Button>
                <Button
                    type="submit"
                    style={{
                        marginTop: "-15px",
                        fontFamily: "Poppins",
                    }}
                    onClick={() => setStepNumber((prev) => prev - 1)}
                    variant="text"
                    sx={{
                        margin: "auto"
                    }}
                    disableElevation
                    size="small"
                >
                    Back
                </Button>
            </>
        );
    };

    const VerifyPhoneNumber = () => {


        const [snackBarVisibility, setSnackBarVisibility] = useState(false);
        const [snackBarMessage, setSnackBarMessage] = useState("Test Message");
        const [snackBarType, setSnackBarType] = useState("success");
        const [verifyOtpLoading, setVerifyOtpLoading] = React.useState(false);
        const [sendOtpLoading, setSendOtpLoading] = React.useState(false);


        const customSnackBar = () => (
            <Snackbar open={snackBarVisibility} autoHideDuration={6000} onClose={() => setSnackBarVisibility(false)}>
                <Alert onClose={() => setSnackBarVisibility(false)} severity={snackBarType} sx={{ width: '100%' }}>
                    {snackBarMessage}
                </Alert>
            </Snackbar>
        );

        const [OTP, setOTP] = useState("");
        const { formValues } = useFormContext();

        // Recaptcha
        const authFirebase = auth;

        const onSignInSubmit = () => {




            const appVerifier = window.recaptchaVerifier;
            const phoneNumber = `+${formValues.phone}`;

            signInWithPhoneNumber(authFirebase, phoneNumber, appVerifier)
                .then((confirmationResult) => {

                    setSendOtpLoading(false);

                    // showing snackbar
                    setSnackBarMessage(`SMS sent on ${phoneNumber}`);
                    setSnackBarType("success");
                    setSnackBarVisibility(true);
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    window.confirmationResult = confirmationResult;
                    const recaptchaContainer = document.getElementById('recaptcha-container');

                    recaptchaContainer.replaceChildren();
                    // ...
                }).catch((error) => {
                    setSendOtpLoading(false);
                    const recaptchaContainer = document.getElementById('recaptcha-container');

                    // showing snackbar
                    setSnackBarMessage(`Error Sending OTP, Try Again`);
                    setSnackBarType("error");
                    setSnackBarVisibility(true);

                    recaptchaContainer.replaceChildren();
                    console.log(error);
                });
        }

        const onOtpVerify = () => {

            setVerifyOtpLoading(true);
            confirmationResult.confirm(OTP).then((result) => {

                setVerifyOtpLoading(false);

                // User signed in successfully.


                setSnackBarMessage(`Verification Successfull`);
                setSnackBarType("success");
                setSnackBarVisibility(true);


                // ...
            }).catch((error) => {
                setVerifyOtpLoading(false);
                console.log(error);
                setSnackBarMessage(`Wrong OTP, Try Again`);
                setSnackBarType("error");
                setSnackBarVisibility(true);
            });
        }



        return (
            <div className="flex flex-col justify-center text-center">

                {customSnackBar()}
                <h1 className="text-2xl text-center m-4"> OTP will be sent to <b>+{formValues.phone}</b> </h1>
                <LoadingButton loading={sendOtpLoading} id="sign-in-button" onClick={() => {
                    // setting loading to true
                    setSendOtpLoading(true);
                    const recaptchaContainer = document.getElementById('recaptcha-container');

                    recaptchaContainer.replaceChildren();



                    window.recaptchaVerifier = new RecaptchaVerifier(auth, recaptchaContainer, {

                        'size': 'normal',  // Use 'normal' size for a visible reCAPTCHA
                        'callback': (response) => {
                            // Callback function when reCAPTCHA is successfully solved
                            onSignInSubmit();

                            // recaptchaContainer.replaceChildren();

                        },
                        'expired-callback': () => {
                            // Callback function when reCAPTCHA expires
                            console.log("Captcha verification expired");

                        }
                    });

                    // Render the reCAPTCHA explicitly
                    window.recaptchaVerifier.render();



                }}

                    variant="outlined" size="large" sx={{ margin: "auto", fontFamily: 'Poppins' }}>
                    Send Otp Via SMS
                </LoadingButton>



                <div style={{ textAlign: "center" }} className="my-4" id="recaptcha-container"></div>
                <br />
                <hr />
                <div className="bg-slate-200 p-5 mt-10 mb-5 items-center flex flex-row justify-center rounded-md shadow-md">
                    <OTPInput
                        autoFocus
                        value={OTP}
                        onChange={(e) => setOTP(e)}
                        OTPLength={6}
                        otpType="number"
                        disabled={false}
                    />
                </div>
                <LoadingButton
                    loading={verifyOtpLoading}
                    onClick={onOtpVerify}
                    size="large"
                    disableElevation
                    variant="contained"
                    sx={{ fontFamily: "Poppins" }}
                >
                    Verify Otp & Complete Signup
                </LoadingButton>
                <Button
                    type="submit"
                    style={{ marginTop: "10px", fontFamily: "Poppins" }}
                    onClick={() => setStepNumber((prev) => prev - 1)}
                    variant="text"
                    disableElevation
                    sx={{ margin: "auto" }}
                    size="small"
                >
                    Back
                </Button>
                <br />
            </div>
        );
    };

    return (
        <div className="flex flex-row w-full h-full bg-[#FCFCFC] login-container">
            {/* form container */}
            <div className="p-5 sm:p-16 sm:basis-1/2 flex-col login-box">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl tracking-widest font-poppins">
                    Open The Door To Global
                    Trade Possibilities With <span className="font-medium text-[#2C83EC] ">AVM Traders</span>
                </h1>
                <div className="flex flex-col mt-10 gap-4 sm:mt-18 sm:gap-6">
                    <Stepper activeStep={stepNumber} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {stepNumber === 0 ? <PersonalDetailsForm /> : stepNumber === 1 ? <AddressAndContactDetailsForm /> : stepNumber === 2 ? <VerifyPhoneNumber /> : null}
                </div>
            </div>
            {/* image container */}
            <div className="hidden sm:basis-1/2 md:block p-7 image-box">
                <img src={importerImg} className="login-img" alt="" />
            </div>
        </div>
    );
};

export default ImporterSignup;

import "../../App.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import importerImg from "../../Assets/Images/ImporterLoginImg.jpg";
import { useState } from "react";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const [showPassword, setShowPassword] = useState(true);

    function onInputChange(e) {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    function loginUser() {
        console.log(loginData);
        // Reset the loginData state to empty object after logging the data


    }

    return (
        <div className="flex flex-row w-full h-full bg-[#FCFCFC] login-container">
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


                    <TextField type="email" label="Email Address" required>

                    </TextField>

                    <TextField InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={()=>{
                                setShowPassword((previous)=>(!previous));
                            }}>
                               { showPassword? <VisibilityIcon/>:<VisibilityOffIcon/>}
                            </IconButton>
                        </InputAdornment>
                    )
                    }} type={ showPassword?"password":"text" } label="Password" sx={{
                        marginBottom:"-10px"
                    }} required>

                    </TextField>

                    <div className="flex justify-end cursor-pointer text-sm font-roboto font-normal">
                        <p>Forgot Password?</p>
                    </div>

                    <Button type="submit" style={
                        {
                            backgroundColor: "#2C83EC",
                            fontFamily:"Poppins",
                        }
                    } variant="contained" disableElevation size="large">

                        SIGN IN

                    </Button>

                    {/* frogot password container */}
                   

                    {/* hr line */}

                    <div className="my-4" style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ flex: 1, backgroundColor: "#CFDFE2", height: ".5px" }} />

                        <p style={{ margin: "0 10px" }}>OR</p>

                        <div style={{ flex: 1, backgroundColor: "#CFDFE2", height: ".5px" }} />
                    </div>

                </div>

                {/* buttons */}

                <div className="flex flex-row items-center justify-center gap-7">

                    <Button style={
                        {
                            backgroundColor: "#F3F9FA",
                            fontSize: "14px",
                            fontWeight: "normal",
                            padding: "10px 15px",
                            textTransform: "capitalize",
                            color: "black",
                            fontFamily:"Roboto"
                        }
                    } startIcon={<GoogleIcon />}>
                        Sign in With Google
                    </Button>

                    <Button style={
                        {
                            backgroundColor: "#F3F9FA",
                            fontSize: "14px",
                            fontWeight: "normal",
                            padding: "10px 15px",
                            textTransform: "capitalize",
                            color: "black",
                            fontFamily:"Roboto"
                        }
                    } startIcon={<FacebookIcon />}>
                        Sign in With Facebook
                    </Button>


                  

                </div>

                <p className="font-roboto text-sm text-center mt-6">
                    Don't Have an Account ?<b> <span className="text-[#2C83EC]"> Sign Up </span></b>
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

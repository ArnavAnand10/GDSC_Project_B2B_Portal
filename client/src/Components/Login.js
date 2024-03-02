import "../App.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import importerImg from "../Assets/Images/ImporterLoginImg.jpg";
import { useState } from "react";
import PasswordStrengthBar from 'react-password-strength-bar';

const Login = () => {

    const [loginData, setLoginData] = useState({});

    function onInputChange(e) {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    function loginUser() {
        console.log(loginData);
        // Reset the loginData state to empty object after logging the data
        
       
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="fields-container">
                    <h1 style={{
                        letterSpacing: "7px",
                        fontSize: "30px"
                    }}>Open The Door To Global <br /> Trade Possibilities with XYZ</h1>
                    <h1 style={{
                        fontWeight: "bold",
                        textAlign: "left",
                        fontSize: "36px"
                    }}> Let's <span style={{
                        color: "#0C8CE9"
                    }}>Sign You Up !</span>  </h1>
                    <br /> <br />
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        width: "80%"
                    }}>
                        <TextField
                            label="Full Name"
                            id="filled-size-small"
                         
                            name="fullName"
                            onChange={onInputChange}
                            value={loginData.fullName || ''}
                        />
                        <TextField
                            label="Email Address"
                            id="filled-size-small"
                        
                            variant="outlined"
                            name="email"
                            onChange={onInputChange}
                            value={loginData.email || ''}
                        />
                        <TextField
                            label="Password"
                            id="filled-size-small"
                            type="password"
                            variant="outlined"
                            name="password"
                            placeholder="Enter Atleast 8 Character Long Password"
                            onChange={onInputChange}
                            value={loginData.password || ''}
                        />
                        {loginData.password && <PasswordStrengthBar minLength={8}  password={loginData.password} />}
                        
                        <TextField
                            label="Confirm Password"
                            id="filled-size-small"
                            type="password"
                            variant="outlined"
                            name="confirmPassword"
                          
                            onChange={onInputChange}
                            value={loginData.confirmPassword || ''}
                        />
                       { loginData.password!=loginData.confirmPassword && <h5 className="helper-text" style={
                        {
                            textAlign:"right",
    
                        }
                       }>Both Password Didn't Match.</h5> }

                       
                        
                       

                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: '4px',
                                boxShadow: "1",
                                fontSize: "16px",
                                
                            }}
                            onClick={loginUser}
                        >
                            Sign Up
                        </Button>
                        <div className="small-text-container" style={{
                            display: "flex",
                            alignContent: "center",
                            justifyContent: 'center',
                        }}>
                            <p style={{
                                fontFamily: "Roboto",
                                fontSize: "16px",
                            }}>Already a User? <span style={{
                                color: "#0C8CE9",
                                fontWeight: "bold",
                                letterSpacing: "1px"
                            }}> Sign In</span> </p>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <img className="login-img" src={importerImg} alt="Importer" />
                </div>
            </div>
        </div>
    );
}

export default Login;

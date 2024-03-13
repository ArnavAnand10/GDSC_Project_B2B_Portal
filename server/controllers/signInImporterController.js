const Importer = require("../Models/Importer/ImporterSignupModel")
const jwt = require("jsonwebtoken");
const bcrypt  = require("bcrypt");


const signInImporter = async (req, res) => {

    const { email, password } = req.body;
 

    try {
        const User = await Importer.findOne({emailAddress:email});
        if(User){
            if(User.password===password){

                // assigning token to user on successfull login:

                const AccessToken =  jwt.sign({id: User._id, email: email},process.env.JWT_SECRET_KEY,{expiresIn: '3m'});
                const RefreshToken = jwt.sign({id: User._id, email: email},process.env.JWT_SECRET_KEY);
                // sending the token using cookies after encrypting them using bcrypt:
                
                res.cookie('accessToken', AccessToken, { httpOnly: true, secure: true, // Set this only if your website is served over HTTPS
                sameSite: 'strict', });
                res.cookie('refreshToken', RefreshToken, { httpOnly: true, secure: true, // Set this only if your website is served over HTTPS
                sameSite: 'strict', });
            
                return res.status(200).json({status:"Success",msg:"User Authenticated"})

            }else{
                return res.status(403).json({status:"Error",msg:"Incorrect Password"})

            }
        }else{
            return res.status(403).json({status:"Error",msg:"No Importer Found With this Email."})
        }

    }
    catch (e) {
        return res.status(401).json({status:"Error",msg:"Internal Server Error, Try Again"})
    }

}

module.exports = signInImporter;
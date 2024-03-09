const Importer = require("../Models/Importer/ImporterSignupModel")




const signInImporter = async (req, res) => {

    const { email, pass } = req.body;

    try {
        const User = await Importer.findOne({emailAddress:email});
        if(User){
            if(User.password===pass){
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
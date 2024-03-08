const Importer = require("../Models/Importer/ImporterSignupModel");

const changeImporterPassword = async (req,res)=>{

    const {importerEmail,importerChangedPassword} = req.body;
    try{
    const importer = await Importer.findOneAndUpdate({emailAddress:importerEmail},{$set: {password:importerChangedPassword}});
    return res.status(200).json({msg:"Password Changed Successfully"})
    }
    catch(error){
        return res.status(500).json({msg:"Couldnot Change Password, Try Again!"})

    }
    

    }



module.exports = changeImporterPassword;
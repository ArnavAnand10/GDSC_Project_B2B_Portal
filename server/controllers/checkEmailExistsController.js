const mongoose = require("mongoose");
const Importer = require("../Models/Importer/ImporterSignupModel");

const checkEmailExists=async(req,res)=>{
console.log(req.body);
    console.log("User"+req.body.userEmail);

    try{
        const importer= await Importer.findOne({emailAddress:req.body.userEmail});
      if(!importer){
        res.status(403).json({status:"Error",msg:"No user found with this email"})
      }else{
        res.status(200).json({status:"Success",msg:"User Found",phone:importer.loginNumber})
      }

    }catch(e){
        res.status(501).json({status:"Error",msg:"Internal Server Error, Try Again"})
    }
    

}

module.exports = checkEmailExists;
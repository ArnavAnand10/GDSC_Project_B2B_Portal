const mongoose = require("mongoose");

// creating the required Schema

const ImporterSignupSchema = mongoose.Schema({

    fullName:{
        type: String,
        
    },

    gender:{
        type:String,
    },

    emailAddress:{
        type: String,
    },

    password:{
        type: String,

    },

    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ImporterAddress"
    }

})

const Importer =  mongoose.model("Importer",ImporterSignupSchema);

module.exports = Importer;
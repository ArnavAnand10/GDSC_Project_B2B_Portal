const mongoose = require("mongoose");
const Product = require("../Exporter/productModel");

// creating the required Schema

const ImporterSignupSchema = mongoose.Schema({

    fullName:{
        type: String,
        equired: true
    },

    gender:{
        type:String,
        equired: true
    },

    emailAddress:{
        type: String,
        equired: true
    },

    password:{
        type: String,
        equired: true

    },

    phoneNumber:{
        type: String,
        required: true,
        unique:true
    },
    cart: [{
        type:  mongoose.Schema.Types.ObjectId,
        ref: Product
    }],
    wishlist:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    orders:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    loginNumber:{
        type:String,
    },

    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ImporterAddress"
    }

})

const Importer =  mongoose.model("Importer",ImporterSignupSchema);

module.exports = Importer;
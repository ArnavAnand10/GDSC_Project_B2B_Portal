const mongoose = require("mongoose");

const exporterSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    fullName:{
        type: String,
        required: true
    },
    profilePhoto:
    {
        type: String,
        ref:"ProfilePhoto"
    },
    companyname:{
        type: String,
        required: true
    },
    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ImporterAddress"
    },
    phone:{
        type: String,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],           
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
});
const Exporter = mongoose.model("Exporter", exporterSchema);
module.exports = Exporter;
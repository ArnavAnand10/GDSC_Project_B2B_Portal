const mongoose = require("mongoose");

const importerAddressSchema = mongoose.Schema({
    addressLine1:{
        type:String
    },
    addressLine2:{
        type:String
    },
    landmark:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    zipCode:{
        type : String,
    },
    phone:{
        type:String,
    }
})

const ImporterAddress = mongoose.model("ImporterAddress",importerAddressSchema);
module.exports = ImporterAddress;
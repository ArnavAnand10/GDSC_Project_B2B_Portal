const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    productName:{
        type: String,
        required: true,
    },
    productDescription:{
        type: String,
        required: true,
    },
    productPrice:{
        type: Number,
        required: true,
    },
    productQuantity:{
        type: Number,
        required: true,
    },
    productCategory:{
        type: String,
        required: true,
    },
    productImage:{
        type: String,
        required: true,
    },
    productcreatedAt:{
        type: Date,
        default: Date.now,
        description: String
    },
    productupdatedAt:{
        type: Date,
        default: Date.now,
        description: String
    },
    productSeller:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Importer"
    }
})


const Product =  mongoose.model("Product",ProductSchema);

module.exports = Product;
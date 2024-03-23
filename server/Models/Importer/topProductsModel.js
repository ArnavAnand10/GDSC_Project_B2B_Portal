const mongoose = require("mongoose");
const topProductsSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    productName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantitySold: {
        type: Number,
        required: true
    },
    totalRevenue: {
        type: Number,
        required: true
    }
});
const TopProduct = mongoose.model("TopProducts", topProductsSchema);
module.exports = TopProduct;
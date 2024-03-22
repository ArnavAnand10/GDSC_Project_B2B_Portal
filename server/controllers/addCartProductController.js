const Product = require('../Models/productModel'); // Import Product model
const Importer = require('../Models/ImporterSignupModel'); // Import Importer model

// Controller function to add a product to the importer's cart
const addToCart = async(req, res)=>{
    try {
        const { importerId, productId } = req.body;

        // Find the importer
        const importer = await Importer.findById(importerId);

        if (!importer) {
            return res.status(404).json({ message: "Importer not found" });
        }

        // Add the product to the cart
        importer.cart.push(productId);
        await importer.save();

        res.status(200).json({ message: "Product added to cart successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = addToCart;

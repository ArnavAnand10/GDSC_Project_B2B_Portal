const Importer = require('../Models/Importer/ImporterSignupModel'); // Import Importer model

// Controller function to remove a product to the importer's cart
const removeFromCart = async(req, res)=>{
    try {
        const { importerId, productId } = req.body;

        // Find the importer
        const importer = await Importer.findById(importerId);

        if (!importer) {
            return res.status(404).json({ message: "Importer not found" });
        }

        // remove the product to the cart
        importer.cart = importer.cart.filter(item => !item.equals(productId));

        await importer.save();

        res.status(200).json({ message: "Product removed from cart successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = removeFromCart;

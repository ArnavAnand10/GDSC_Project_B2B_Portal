const Importer = require("../Models/Importer/ImporterSignupModel");

// Controller function to add a product to the importer's wishlist

 const addToWishList = async(req, res) => {
    
    try {
        const { importerId, productId } = req.body;

        // Find the importer
        const importer = await Importer.findById(importerId);

        if (!importer) {
            return res.status(404).json({ message: "Importer not found" });
        }

        // Check if the product is already in the wishlist
        if (importer.wishlist.includes(productId)) {
            return res.status(400).json({ message: "Product already exists in the wishlist" });
        }

        // Add the product to the wishlist
        importer.wishlist.push(productId);
        await importer.save();

        res.status(200).json({ message: "Product added to wishlist successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = addToWishList;
const Importer = require("../Models/Importer/ImporterSignupModel");

// Controller function to get the importer's wishlist
const fetchWishlistProducta = async(req, res)=>{
    try {
        const { importerId } = req.body;

        // Find the importer
        const importer = await Importer.findById(importerId).populate('wishlist');

        if (!importer) {
            return res.status(404).json({ message: "Importer not found" });
        }
        
        res.status(200).json({wishlistData:importer.wishlist});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = fetchWishlistProducta;

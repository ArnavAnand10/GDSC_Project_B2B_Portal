const Importer = require("../Models/Importer/ImporterSignupModel");


// Controller function to get the importer's cart

async function fetchCartProduct(req, res) {
    try {
        const { importerId } = req.params;

        // Find the importer
        const importer = await Importer.findById(importerId).populate('cart');

        if (!importer) {
            return res.status(404).json({ message: "Importer not found" });
        }

        res.status(200).json(importer.cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


module.exports = fetchCartProduct;
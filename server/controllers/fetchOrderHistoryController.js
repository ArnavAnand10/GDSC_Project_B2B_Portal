const Importer = require('../Models/Importer/ImporterSignupModel');
//Controller fn for fetching order history of a particular importer by his id


const fetchOrderHistory = async (req, res) => {

    const { importerId } = req.params;

    try {
        //Finding the importer
        const importer = await Importer.findById(importerId);

        if (!importer) {
            return res.status(404).json({ message: 'Importer Not Found' });
        }
        //If importer exists  populate the order history
        res.status(200).json(importer.orders)

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = fetchOrderHistory;
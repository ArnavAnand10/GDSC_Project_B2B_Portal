const Product = require("../Models/productModel");

const fetchProductSpecs = async (req,res)=>{
    const {productId} = req.body;

    try 
    {
        //Fetch product details fro Mongo DB
        const fetchProductSpecs = await Product.find({id:productId});
        res.status(200).json({
            productDetails : fetchProductSpecs,
        })

    } catch (error) {
        console.log(error);

        res.status(501).json({msg:"Error in fetching Data"})
    }

}

exports.module = fetchProductSpecs;
const Product = require("../Models/Exporter/productModel");

const fetchProduct= async (req,res)=>{

const {id}=req.params;


try{


const product = await Product.find({id:id})

    res.status(200).json({status:"success", productData:product})
}catch(e){
    console.log(e);
    res.status(500).json({status:"error",msg:"Internal Server Error"})
}
}

module.exports=fetchProduct;
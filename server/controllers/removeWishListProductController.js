const Importer = require("../Models/Importer/ImporterSignupModel");

const removeWishListProduct =  async (req,res)=>{

    const {importerId,productId} = req.body;

    // finding importer

    try{

        const Importer = await Importer.findById(importerId);

        if(!Importer){
           return res.status(404).json({msg:"Importer Not Found"});
        }
        
        Importer.wishList = Importer.wishList.filter((item)=>!item.equals(productId));

        await Importer.save();

        return res.status(200).json({message : "Product remved from Wishlist"})

    }

    catch(error){
        console.log(`error in removing item from wishlist :${error}`);
        return res.status(500).json({message:"Error in removing product from wishlist"})
    }


}

module.exports = removeWishListProduct;
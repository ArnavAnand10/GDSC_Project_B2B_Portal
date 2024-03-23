const Product = require("../Models/Exporter/productModel");

const dummyData = [
    {
        id: 1,
        productName: "T-Shirt",
        productDescription: "A comfortable cotton t-shirt for everyday wear.",
        productPrice: 15.99,
        productQuantity: 100,
        productCategory: "Clothing",
        productImage: "https://example.com/tshirt.jpg",
        productSeller: "609c9a7a1c79630a2c044e6a", // Replace with valid ObjectId of the seller
    },
    {
        id: 2,
        productName: "Running Shoes",
        productDescription: "Lightweight running shoes with breathable mesh upper.",
        productPrice: 59.99,
        productQuantity: 50,
        productCategory: "Footwear",
        productImage: "https://example.com/runningshoes.jpg",
        productSeller: "609c9a7a1c79630a2c044e6a", // Replace with valid ObjectId of the seller
    },
    {
        id: 3,
        productName: "Wireless Headphones",
        productDescription: "Bluetooth headphones with noise-cancelling feature.",
        productPrice: 89.99,
        productQuantity: 30,
        productCategory: "Electronics",
        productImage: "https://example.com/headphones.jpg",
        productSeller: "609c9a7a1c79630a2c044e6b", // Replace with valid ObjectId of the seller
    },
    {
        id: 4,
        productName: "Leather Wallet",
        productDescription: "Handcrafted leather wallet with multiple compartments.",
        productPrice: 29.99,
        productQuantity: 80,
        productCategory: "Accessories",
        productImage: "https://example.com/wallet.jpg",
        productSeller: "609c9a7a1c79630a2c044e6c", // Replace with valid ObjectId of the seller
    },
    {
        id: 5,
        productName: "Smartwatch",
        productDescription: "Waterproof smartwatch with fitness tracking and heart rate monitor.",
        productPrice: 129.99,
        productQuantity: 20,
        productCategory: "Electronics",
        productImage: "https://example.com/smartwatch.jpg",
        productSeller: "609c9a7a1c79630a2c044e6b", // Replace with valid ObjectId of the seller
    },
    {
        id: 6,
        productName: "Backpack",
        productDescription: "Durable backpack with padded straps and multiple compartments.",
        productPrice: 49.99,
        productQuantity: 40,
        productCategory: "Bags",
        productImage: "https://example.com/backpack.jpg",
        productSeller: "609c9a7a1c79630a2c044e6c", // Replace with valid ObjectId of the seller
    },
    {
        id: 7,
        productName: "Yoga Mat",
        productDescription: "Eco-friendly yoga mat with non-slip surface.",
        productPrice: 24.99,
        productQuantity: 60,
        productCategory: "Fitness",
        productImage: "https://example.com/yogamat.jpg",
        productSeller: "609c9a7a1c79630a2c044e6d", // Replace with valid ObjectId of the seller
    },
    {
        id: 8,
        productName: "Gaming Mouse",
        productDescription: "High-performance gaming mouse with customizable RGB lighting.",
        productPrice: 39.99,
        productQuantity: 35,
        productCategory: "Gaming",
        productImage: "https://example.com/gamingmouse.jpg",
        productSeller: "609c9a7a1c79630a2c044e6e", // Replace with valid ObjectId of the seller
    },
    {
        id: 9,
        productName: "Kitchen Knife Set",
        productDescription: "Set of stainless steel kitchen knives with wooden block.",
        productPrice: 49.99,
        productQuantity: 25,
        productCategory: "Kitchenware",
        productImage: "https://example.com/knifeset.jpg",
        productSeller: "609c9a7a1c79630a2c044e6f", // Replace with valid ObjectId of the seller
    },
    {
        id: 10,
        productName: "Desk Lamp",
        productDescription: "Adjustable LED desk lamp with touch control.",
        productPrice: 19.99,
        productQuantity: 30,
        productCategory: "Home Decor",
        productImage: "https://example.com/desklamp.jpg",
        productSeller: "609c9a7a1c79630a2c044e70", // Replace with valid ObjectId of the seller
    },
    // Add more products as needed
];

const insertProducts = ()=>{
    try{
        Product.insertMany(dummyData);
        console.log("products pushed successfully")
    }
    catch(e){
        console.log(`error: ${e}`);
    }
    
}


module.exports = insertProducts;


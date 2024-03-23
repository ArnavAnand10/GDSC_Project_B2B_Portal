const express = require("express");
const {signupImporter,importerSignupValidator} = require("./controllers/signupImporterController");
const checkEmailExists = require("./controllers/checkEmailExistsController");
const changeImporterPassword = require("./controllers/changeImporterPasswordController");
const signInImporter = require("./controllers/signInImporterController");

const authMiddleWare = require("./middleware/Auth");

//Getting controller functions to the router manager

const fetchProducts = require("./controllers/fetchAllProducts");
const fetchCartProduct = require("./controllers/fetchCartProductsController");
const fetchWishlistProducts = require("./controllers/fetchWishlistProducts");
const addWishlistProduct = require("./controllers/addWishListProductController");
const addCartProduct = require("./controllers/addCartProductController");
const fetchProduct = require("./controllers/fetchProductController");
const removeFromCart = require("./controllers/removeCartProductController");
const removeWishListProduct = require("./controllers/removeWishListProductController");
//Setting up the router
const router = express.Router();


// Importer Routes

router.post("/signinImporter", signInImporter)
router.post("/signupImporter",signupImporter)
router.post("/importerSignupValidator",importerSignupValidator)
router.post("/checkEmailExists",checkEmailExists)
router.post("/changeImporterPassword",changeImporterPassword)



router.get("/api/products",fetchProducts)
router.get("/api/products/:id",fetchProduct)
router.get("/api/cart/getItems",fetchCartProduct);
router.post("/api/cart/addtocart",addCartProduct);
router.post("/api/cart/removefromcart",removeFromCart);


// wishlist routing
router.get("/api/wishlist/getWishListItems",fetchWishlistProducts);
router.delete("/api/wishlist/removeItem",removeWishListProduct);
router.post("/api/wishlist/items",addWishlistProduct);

module.exports = router;
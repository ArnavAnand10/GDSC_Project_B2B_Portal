const express = require("express");
const {signupImporter,importerSignupValidator} = require("./controllers/signupImporterController");
const checkEmailExists = require("./controllers/checkEmailExistsController");
const changeImporterPassword = require("./controllers/changeImporterPasswordController");
const signInImporter = require("./controllers/signInImporterController");

const authMiddleWare = require("./middleware/Auth");

//Getting controller functions to the router manager

const fetchProducts = require("./controllers/fetchAllProducts");
const fetchProductSpecs = require("./controllers/fetchProductSpecsController");
const fetchCartProduct = require("./controllers/fetchCartProductsController");
const fetchWishlistProducta = require("./controllers/fetchWishlistProducts");
const addWishlistProduct = require("./controllers/addWishListProductController");
const addCartProduct = require("./controllers/addCartProductController");
//Setting up the router
const router = express.Router();

router.post("/signinImporter", signInImporter)
router.post("/signupImporter",signupImporter)
router.post("/importerSignupValidator",importerSignupValidator)
router.post("/checkEmailExists",checkEmailExists)
router.post("/changeImporterPassword",changeImporterPassword)
//importer router
router.get("/api/products",fetchProducts)
router.get("/api/products/",fetchProductSpecs);
router.get("/api/cart/items",fetchCartProduct);
router.get("/api/wishlist/items",fetchWishlistProducta);
router.post("/api/cart/items",addCartProduct);
router.post("/api/wishlist/items",addWishlistProduct);

module.exports = router;
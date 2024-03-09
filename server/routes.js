const express = require("express");
const {signupImporter,importerSignupValidator} = require("./controllers/signupImporterController");
const checkEmailExists = require("./controllers/checkEmailExistsController");
const changeImporterPassword = require("./controllers/changeImporterPasswordController");
const signInImporter = require("./controllers/signInImporterController");
const router = express.Router();

router.post("/signinImporter",signInImporter)
router.post("/signupImporter",signupImporter)
router.post("/importerSignupValidator",importerSignupValidator)
router.post("/checkEmailExists",checkEmailExists)
router.post("/changeImporterPassword",changeImporterPassword)
module.exports = router;
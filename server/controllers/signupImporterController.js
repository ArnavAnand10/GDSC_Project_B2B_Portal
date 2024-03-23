const Importer = require("../Models/Importer/ImporterSignupModel");


const importerSignupValidator = async (req, res) => {
  const signUpData = req.body;

 

  try {
    const User = await Importer.findOne({ emailAddress: signUpData.emailAddress });
    const UserWithPhone = await Importer.findOne({ loginNumber: signUpData.loginNumber });
    
    if (!User && !UserWithPhone) {
      res.status(200).json({ msg: "Can proceed" });
    } else {
      if (!User) {
        res.status(501).json({ msg: "Phone Number Already in Use" });
      } else {
        res.status(501).json({ msg: "Email Already in Use" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Error", msg: "Internal Server Error" });
  }
};

const signupImporter = async (req, res) => {
  const signUpData = req.body;

  try {
    const User = await Importer.findOne({ emailAddress: signUpData.emailAddress });

    if (!User) {
      const UserWithPhone = await Importer.findOne({ loginNumber: signUpData.loginNumber });
      
      if (!UserWithPhone) {
        try {
          const importerAddress = await ImporterAddress.create({
            addressLine1: signUpData.addressLine1,
            addressLine2: signUpData.addressLine2,
            landmark: signUpData.landmark,
            city: signUpData.city,
            state: signUpData.state,
            zipCode: signUpData.zipCode,
            addressPhoneNumber: signUpData.addressPhoneNumber,
          });

          await importerAddress.save();

          const importer = await Importer.create({
            fullName: signUpData.fullName,
            gender: signUpData.gender,
            emailAddress: signUpData.emailAddress,
            password: signUpData.password,
            loginNumber: signUpData.loginNumber,
            address: importerAddress._id,
          });

          await importer.save();
          return res.status(200).json({ status: "Success", msg: "Sign Up Successful" });
        } catch (error) {
          console.log(error);
          return res.status(500).json({ status: "Error", msg: "Error While Sign Up" });
        }
      } else {
        return res.status(403).json({ status: "Error", msg: "Login Phone Already in Use" });
      }
    } else {
      return res.status(403).json({ status: "Error", msg: "Email Already in Use" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "Error", msg: "Internal Server Error" });
  }
};

module.exports = { signupImporter, importerSignupValidator };

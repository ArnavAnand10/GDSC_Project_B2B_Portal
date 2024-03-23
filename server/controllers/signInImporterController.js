
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const Importer = require("../Models/Importer/ImporterSignupModel");

const algorithm = "aes-256-cbc";

// generate 16 bytes of random data
const iv = crypto.randomBytes(16);
const Securitykey = crypto.randomBytes(32);
const cipher = crypto.createCipheriv(algorithm, Securitykey, iv);



const signInImporter = async (req, res) => {

    const { email, password } = req.body;


    try {
        const User = await Importer.findOne({ emailAddress: email });
        if (User) {
            if (User.password === password) {

                // assigning token to user on successfull login:

                const AccessToken = jwt.sign({ id: User._id, email: email }, process.env.JWT_SECRET_KEY, { expiresIn: '3m' });
                // encrypt the message with the specified input encoding and give output in specified output encoding.
                let encryptedData = cipher.update(AccessToken, "utf-8", "hex");

                encryptedData += cipher.final("hex");


                // the decipher function with the same key and iv as cipher method
const decipher = crypto.createDecipheriv(algorithm, Securitykey, iv);
 
// decrypt the message with the specified input encoding and give output in specified output encoding.
let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
 
decryptedData += decipher.final("utf8");

                const RefreshToken = jwt.sign({ id: User._id, email: email }, process.env.JWT_SECRET_KEY);
                // sending the token using cookies after encrypting them using bcrypt:

                res.cookie('accessToken', encryptedData, {
                    httpOnly: true, secure: true, // Set this only if your website is served over HTTPS
                    sameSite: 'strict',
                });
                res.cookie('refreshToken', RefreshToken, {
                    httpOnly: true, secure: true, // Set this only if your website is served over HTTPS
                    sameSite: 'strict',
                });

                res.cookie('decrypted', decryptedData, {
                    httpOnly: true, secure: true, // Set this only if your website is served over HTTPS
                    sameSite: 'strict',
                });

                return res.status(200).json({ status: "Success", msg: "User Authenticated" })

            } else {
                return res.status(403).json({ status: "Error", msg: "Incorrect Password" })

            }
        } else {
            return res.status(403).json({ status: "Error", msg: "No Importer Found With this Email." })
        }

    }
    catch (e) {
        return res.status(401).json({ status: "Error", msg: "Internal Server Error, Try Again" })
    }

}

module.exports = signInImporter;
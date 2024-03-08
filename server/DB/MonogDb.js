const mongoose = require("mongoose");

require('dotenv').config();


async function connect() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
     await mongoose.connect(process.env.MONGO_URI)
     console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch(e) {
        console.log("Error while connectin to DB");
        console.log(e);
    }
  }

module.exports = connect;
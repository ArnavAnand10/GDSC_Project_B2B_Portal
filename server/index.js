const express = require("express");
const router = require("./routes");
const connect = require("./DB/MonogDb");
const app = express();
const cors = require("cors");
require('dotenv').config();


app.use(express.json());
app.use(cors());
app.use("/",router)

// connecting DB
connect();

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server Started Listening at Port ${PORT}`);
})




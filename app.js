require("dotenv").config(); //#Here  import env
const express = require("express"); //#Here  import express
const connectToDb = require("./config/db.js"); //#Here  import db.js
//#importing controllers and routes files here
const cors = require("cors"); //#Here  import cors
const app = express();
connectToDb();
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(cors());

//  for parsing json request data in requests
const userRoutes = require("./routes/userRouts.js");
app.use("/", userRoutes);

module.exports = app; //#Here export app.js

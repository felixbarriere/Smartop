const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
require("dotenv").config();
const interventionsRoute = require('./Routes/interventions.js');

mongoose.connect(process.env.MONGO_URI);
	
app.use(express.json());
app.use(cors());
app.use("/Interventions/sorted", interventionsRoute);

module.exports = app;
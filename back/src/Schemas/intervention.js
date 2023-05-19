const mongoose = require("mongoose");

let InterventionSchema = new mongoose.Schema({
	surgeon: String,
	anesthsiste: String,
	nurse1: String,
	nurse2: String,
	roomNumber: String,
	intervention: String
}, { collection: "Interventions"});	

module.exports = { InterventionSchema }

// defines Mongoose Schema
const mongoose = require("mongoose");
const { InterventionSchema }  = require("../Schemas/intervention.js");

const Intervention = mongoose.model("Intervention", InterventionSchema);

module.exports = { Intervention }

// creates model
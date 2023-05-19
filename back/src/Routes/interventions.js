const express = require('express');
const router = express.Router();
const getInterventions = require("../Controllers/interventions");


router.get('/', getInterventions);

module.exports = router;
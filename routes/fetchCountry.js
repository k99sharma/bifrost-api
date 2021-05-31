const express = require('express');
const router = express.Router();

// importing controllers
const { getCountryData } = require('../controllers/fetchCountry');


router.get('/', getCountryData);

module.exports = router;
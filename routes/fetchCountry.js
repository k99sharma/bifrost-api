const express = require('express');
const router = express.Router();

// importing controllers
const { getCountryData } = require('../controllers/fetchCountry');

// GET route for fetching country data
router.get('/country', getCountryData);

module.exports = router;
const express = require('express');
const router = express.Router();

const factorialController = require('../contronllers/factorialController');

router.get('/:numero', factorialController.factorial);

module.exports = router;
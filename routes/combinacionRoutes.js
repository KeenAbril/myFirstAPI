const express = require('express');

const router = express.Router();

const combinacionController = require('../contronllers/combinacionController');
const combinacionMiddleware = require('../middlewares/combinacionMiddleware');

router.put('/',
    combinacionMiddleware.checkString,
    combinacionController.combinacion);

module.exports = router;
const express = require('express');
const numAlaetorioController = require('../contronllers/numAlaetorioController');
const numAlaetorioMiddleware = require('../middlewares/numAleatorioMiddleware');

const router = express.Router();

router.get('/:numero',
    numAlaetorioMiddleware.checkNumQueryParam,
    numAlaetorioController.aleatorio);

module.exports = router;
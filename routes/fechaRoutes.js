const express = require('express');
const router = express.Router();

const fechaController = require('../contronllers/fechaController');

router.get('/fechaMs', fechaController.fechaMs);
router.get('/fecha', fechaController.fecha);
router.get('/fechaHora', fechaController.fechaHora);

module.exports = router;
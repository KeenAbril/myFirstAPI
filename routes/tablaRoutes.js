const express = require('express');
const router = express.Router();

const tablaController = require('../contronllers/tablaController');

router.get('/2', tablaController.dos);
router.get('/3', tablaController.tres);
router.get('/4', tablaController.cuatro);
router.get('/5', tablaController.cinco);

module.exports = router;
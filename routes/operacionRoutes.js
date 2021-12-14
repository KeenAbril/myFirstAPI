const express = require('express');

const router = express.Router();

const operacionController = require('../contronllers/operacionController');

router.post('/sum', operacionController.sum);
router.post('/res', operacionController.res);
router.post('/mul', operacionController.mul);
router.post('/div', operacionController.div);

module.exports = router;
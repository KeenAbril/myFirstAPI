const express = require('express');

const router = express.Router();

const movilController = require('../contronllers/movilController');
//const combinacionMiddleware = require('../middlewares/combinacionMiddleware');

router.post('/',
    movilController.anadir);
router.get('/',
    movilController.mostrar);
router.put('/:modelo',
    movilController.actualizar);
router.delete('/:modelo',
    movilController.eliminar);

module.exports = router;
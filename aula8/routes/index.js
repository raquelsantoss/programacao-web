const express = require('express');
const router = express.Router();
const calculadoraController = require('../controller/calculadoraController');

router.get('/', calculadoraController.getCalculadora);
router.post('/calcular', calculadoraController.calcular);

module.exports = router;

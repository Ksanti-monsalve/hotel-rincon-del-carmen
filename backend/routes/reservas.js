const express = require('express');
const { crearReserva, listarReservas } = require('../controllers/reservasController');
const router = express.Router();

router.post('/', crearReserva);
router.get('/', listarReservas);

module.exports = router;

const express = require('express');
const router = express.Router();

const studentController = require('./controllers/studentController');

router.get('/students', studentController.buscarTodos);

router.get('/student/:codigo', studentController.buscarUm);

router.post('/student', studentController.inserirUm);

router.put('/carro/:codigo', studentController.alterar);

router.delete('/student:codigo', studentController.excluir);

module.exports = router;
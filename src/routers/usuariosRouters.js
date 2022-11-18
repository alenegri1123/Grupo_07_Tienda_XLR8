const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosControllers');

router.get('/registro', usuariosController.register)

router.get('/login', usuariosController.login)



module.exports = router;

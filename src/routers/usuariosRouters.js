const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosControllers');

router.get('/registro', usuariosController.register);
router.post('/registro', usuariosController.creandoUsuario);

router.get('/login', usuariosController.login)
router.post('/mostrarNumeroSession', usuariosController.log_in)

router.get('/listaUsuarios', usuariosController.listUsers);
router.get('/buscar', usuariosController.buscarUsuario);

router.get('/editar/:idUser', usuariosController.editarUsuario);
router.put('/editar/:idUser', usuariosController.guardarEdicionUsuario);

router.delete('/eliminar/:idUser', usuariosController.borrarUsuario);

module.exports = router;
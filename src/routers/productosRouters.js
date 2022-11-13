const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosControllers');

router.get('/detalle/:id', productosController.productDetail)

router.get('/carrito', productosController.cart)

router.get('/crear', productosController.crearProducto)

module.exports = router;

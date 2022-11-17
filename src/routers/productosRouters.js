const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosControllers');

router.get('/', productosController.productsGet)

router.get('/crear', productosController.crearProducto)

router.get('/detalle/:id', productosController.productDetail)

router.post('/', productosController.productsGet)

router.get('/detalle/:id/edit', productosController.productDetail)

router.put('/detalle/:id', productosController.productDetail)

router.delete('/detalle/:id', productosController.productDetail)

router.get('/carrito', productosController.cart)



module.exports = router;

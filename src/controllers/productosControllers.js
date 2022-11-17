const path = require('path');
const productos = require('../data/productos.json');

const cart = (req, res) => {
    res.render('products/productCart')
}

const productsGet = (req, res) => {
    res.render('products/productos', { productos })
}

const productDetail = (req, res) => {
    const productoId = req.params.id;
    const producto = productos.find(producto => producto.id == productoId);
    res.render('products/productDetail', { producto })
}

const crearProducto = (req, res) => {
    res.render('products/newProduct')
}

module.exports = {cart, productsGet, productDetail, crearProducto};
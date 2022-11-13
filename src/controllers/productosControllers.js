const path = require('path');
const productos = require('../data/productos.json');

const cart = (req, res) => {
    res.render('./productCart')
}

const productDetail = (req, res) => {
    const productoId = req.params.id;
    const producto = productos.find(producto => producto.id == productoId);
    res.render('./productDetail', { producto })
}

const crearProducto = (req, res) => {
    res.render('./newProduct')
}

module.exports = {cart, productDetail, crearProducto};
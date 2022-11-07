const path = require('path');

const cart = (req, res) => {
    res.render('./productCart')
}

const productDetail = (req, res) => {
    res.render('./productDetail')
}

const crearProducto = (req, res) => {
    res.render('./newProduct')
}

module.exports = {cart, productDetail, crearProducto};
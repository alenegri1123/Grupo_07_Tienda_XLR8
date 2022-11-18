const path = require('path');
//const productosJson = require('../data/productos.json');
const productsFilePath = path.join(__dirname, '../data/productos.json'); 
const fs = require('fs');
const productos = JSON.parse(fs.readFileSync(productsFilePath, {encoding: 'utf-8'}));
// Guarda en una variable la transformacion de JSON en array de objetos.

const productsGet = (req, res) => {
    res.render('products/productos', { productos })
}

const crearProducto = (req, res) => {
    res.render('products/newProduct')
}

const guardarProducto = (req, res) => {
    camposDeNuevoProducto.id = productos.length+1;
        
    // Agregar producto
    let camposDeNuevoProducto = req.body;
    
    // Pushear producto al array
    productos.push(camposDeNuevoProducto);    

    // Lo convierte a texto plano (formato JSON)
    fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 2));
    // el 2 es para guardar prolijo el JSON

    //retorna el resultado.
    return res.send(camposDeNuevoProducto)
}

/*const productDetail = (req, res) => {
    const productoId = req.params.id;
    const producto = productos.find(producto => producto.id == productoId);
    res.render('products/productDetail', { producto })
}

const editarProducto = (req, res) => {
    res.render('/detalle/:id')
}

const guardarEdicionProducto = (req, res) => {
    
}

const borrarProducto = (req, res) => {
    res.render('/detalle/:id')
}

const cart = (req, res) => {
    res.render('products/productCart')
}*/

module.exports = {productsGet, crearProducto, guardarProducto};

/*productDetail, editarProducto, guardarEdicionProducto, borrarProducto, cart*/
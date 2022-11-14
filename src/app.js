// ******** REQUIRE'S ******** //

const express = require('express');
const path = require('path');

// ******** EXPRESS () - (dont touch) ******** //
const app = express();

// ******** Middlewares - (dont touch) ******** //
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded());

// ******** Template Engine - (dont touch) ******** //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views')); //define la ubicacion

// ******** WRITE YOUR CODE FROM HERE ******** //
// ******** Route System require and use () ******** //
const mainRouters = require('./routers/mainRouters');
const productosRouters = require('./routers/productosRouters');
const usuariosRouters = require('./routers/usuariosRouters');

app.use(express.json());
app.use('/', mainRouters);
app.use('/productos', productosRouters);
app.use('/usuario', usuariosRouters);

const port = process.env.PORT || 9558;

app.listen(port, () => {
    console.log(`servidor ${port} funcionando`)
})

const path = require('path');

const renderHome = (req, res) => {
    res.render('./index')
}

const contactanos = (req, res) => {
    res.render('./contacto')
}

const terminos = (req, res) => {
    res.render('./terminos')
}

module.exports = {renderHome, contactanos, terminos};
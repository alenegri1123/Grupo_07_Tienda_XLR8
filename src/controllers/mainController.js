const path = require('path');

const productos = [
    {
        id: 1,
        titulo: 'BUZO PUMA',
        imagen: '/images/productos/h-buzo-01.jpg',
        descuento: '10',
        precio: '700',
        genero: 'Hombre',
        talle: 'X',
        color: 'Negro/Gris'
    },
    {
        id: 2,
        titulo: 'SHORT UNDER ARMOUR',
        imagen: '/images/productos/m-short-02.jpg',
        descuento: '10',
        precio: '790',
        genero: 'Mujer',
        talle: 'L',
        color: 'Lila'
    },
    {
        id: 3,
        titulo: 'CAMPERA REEBOK',
        imagen: '/images/productos/m-campera-02.jpg',
        descuento: '30',
        precio: '2700',
        genero: 'Unisex',
        talle: 'M',
        color: 'Azul'
    },
    {
        id: 4,
        titulo: 'CALZA ASICS',
        imagen: '/images/productos/m-calza-01.jpg',
        descuento: '15',
        precio: '900',
        genero: 'Mujer',
        talle: 'L',
        color: 'Rosa'
    },
    {
        id: 5,
        titulo: 'BUZO ADIDAS',
        imagen: '/images/productos/h-buzo-02.jpg',
        descuento: '30',
        precio: '2000',
        genero: 'Unisex',
        talle: 'M',
        color: 'Azul Francia'
    },
    {
        id: 6,
        titulo: 'CALZA ASICS',
        imagen: '/images/productos/h-calza-01.jpg',
        descuento: '25',
        precio: '2500',
        genero: 'Hombre',
        talle: 'L',
        color: 'Negro'
    },
    {
        id: 7,
        titulo: 'CAMPERA PUMA',
        imagen: '/images/productos/h-campera-01.jpg',
        descuento: '40',
        precio: '4500',
        genero: 'Hombre',
        talle: 'M',
        color: 'Verde'
    },
    {
        id: 8,
        titulo: 'PANTALON PUMA',
        imagen: '/images/productos/h-pantalon-02.jpg',
        descuento: '25',
        precio: '1500',
        genero: 'Hombre',
        talle: 'L',
        color: 'Azul Oscuro'
    },
    {
        id: 9,
        titulo: 'REMERA ASICS',
        imagen: '/images/productos/h-remera-01.jpg',
        descuento: '10',
        precio: '600',
        genero: 'Hombre',
        talle: 'XL',
        color: 'Azul'
    },
    {
        id: 10,
        titulo: 'CAMPERA PUMA',
        imagen: '/images/productos/h-campera-02.jpg',
        descuento: '40',
        precio: '3000',
        genero: 'Unisex',
        talle: 'M',
        color: 'Negro'
    },
    {
        id: 11,
        titulo: 'PANTALON UNDER ARMOUR',
        imagen: '/images/productos/m-pantalon-01.jpg',
        descuento: '50',
        precio: '2800',
        genero: 'Unisex',
        talle: 'M',
        color: 'Gris'
    },
    {
        id: 12,
        titulo: 'SHORT ADIDAS',
        imagen: '/images/productos/h-short-02.jpg',
        descuento: '20',
        precio: '1000',
        genero: 'Hombre',
        talle: 'XL',
        color: 'Gris'
    },
    {
        id: 13,
        titulo: 'BUZO UNDER ARMOUR',
        imagen: '/images/productos/m-buzo-02.jpg',
        descuento: '10',
        precio: '1400',
        genero: 'Mujer',
        talle: 'M',
        color: 'Durazno'
    },
    {
        id: 14,
        titulo: 'REMERA UNDER ARMOUR',
        imagen: '/images/productos/m-remera-01.jpg',
        descuento: '40',
        precio: '2500',
        genero: 'Mujer',
        talle: 'S',
        color: 'Negro'
    },
    {
        id: 15,
        titulo: 'SHORT ADIDAS',
        imagen: '/images/productos/h-short-01.jpg',
        descuento: '10',
        precio: '2900',
        genero: 'Hombre',
        talle: 'L',
        color: 'Negro'
    },
    {
        id: 16,
        titulo: 'CALZA ASICS',
        imagen: '/images/productos/m-calza-02.jpg',
        descuento: '50',
        precio: '4000',
        genero: 'mujer',
        talle: 'L',
        color: 'Negro'
    },
    ];
    
    const secciones = {
        ofertas: {
            ids: [1,2,3,4]
        },
        novedades: {
            ids: [5,6,7,8]
        },
    }
    
    const renderHome = (req, res) => {
        res.render('./index', {
            ofertas: productos.filter(producto => secciones.ofertas.ids.includes(producto.id)),
            novedades: productos.filter(producto => secciones.novedades.ids.includes(producto.id)),
            catalogo: productos.slice(-8),
        })
    }

const contactanos = (req, res) => {
    res.render('./contacto')
}

const terminos = (req, res) => {
    res.render('./terminos')
}

module.exports = {renderHome, contactanos, terminos};
const path = require('path');

const register = (req, res) => {
    res.render('users/register')
}

const login = (req, res) => {
    res.render('users/login')
}


module.exports = {register, login};
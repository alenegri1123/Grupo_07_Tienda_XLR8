const path = require('path');

const register = (req, res) => {
    res.render('./register')
}

const login = (req, res) => {
    res.render('./login')
}


module.exports = {register, login};
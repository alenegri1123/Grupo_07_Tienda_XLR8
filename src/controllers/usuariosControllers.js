const path = require('path');
const usersFilePath = path.join(__dirname, '../data/usuarios.json'); 
const fs = require('fs');
const usuarios = JSON.parse(fs.readFileSync(usersFilePath, {encoding: 'utf-8'}));


const listUsers = (req, res) => {
    res.render('userList',  {'usuarios': usuarios})
}

const register = (req, res) => {
    res.render('users/register')
}

const login = (req, res) => {
    res.render('users/login')
}

const creandoUsuario = (req, res) => {
     // Agregar usuario
     const campoNuevoUsuario = req.body;

     // Pushea el usuario al Array
     campoNuevoUsuario.id = usuarios.length+1;
     usuarios.push(campoNuevoUsuario)
 
     // Lo convierte a texto plano (JSON)
     fs.appendFileSync(usersFilePath, JSON.stringify(usuarios, null, 2));
     // el 2 es para guardar prolijo al JSON
 
     // Retornar el resultado
 
     return res.render('users/userList')
 
}

const log_in = (req, res) => {
    if (req.session.numeroVisitas == undefined){
        req.session.numeroVisitas = 0;}
        req.session.numeroVisitas++;
        res.send('Session tiene el número' + req.session.numeroVisitas)  
        //res.render('mostrarNumeroSession',function (req,res){
            //res.send('Session tiene el número' + req.session.numeroVisitas)
        //})   
        
};



const buscarUsuario = (req, res) => {
    let busquedaUsuario = req.query.search;
    res.send(busquedaUsuario);

    let usuariosEncontrados = [];
    for (let i = 0; i < users.length; i++) {
        if (usuarios[i].name.includes(busquedaUsuario)) {
            usuariosEncontrados.push(users[i]);
        }        
    }
    res.render('usuariosEncontrados', {usuariosEncontrados: usuariosEncontrados});
}

const editarUsuario = (req, res) => {
    const idUser = req.params.idUser;// Logica de levantar usuarios de base de datos

    

    const userParaEditar = users[idUser]; // El usuario para editar, va a ser el ID elegido

    res.render('/users/userEdit', { userParaEditar });

    res.send(idUser);


}

const guardarEdicionUsuario = (req, res) => {
  
}

const borrarUsuario = (req, res) => {

}



module.exports = {register, creandoUsuario, login, listUsers, buscarUsuario, editarUsuario, guardarEdicionUsuario, borrarUsuario, log_in,  };
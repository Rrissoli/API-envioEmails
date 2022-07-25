const express = require('express')
const router = express()
const verificaLogin = require('./filtros/verificaLogin')
const usuarios = require('./controlers/usuario')
const login = require('./controlers/login')
// cadastro de usuario
router.post('/usuarios', usuarios.cadastrarUsuario);

// login
router.post('/login', login.login);

// filtro para verificar usuario logado
router.use(verificaLogin);


module.exports = router
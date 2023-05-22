const express=require('express');
const rutas = express.Router();
const controlador=require('../usuarioControllers/usuarioController');

rutas
    .get('/',controlador.get)
    .get('/',controlador.getById)
    .get('/',controlador.create)
    .get('/',controlador.update)
    .get('/',controlador._delete)
module.exports=rutas;
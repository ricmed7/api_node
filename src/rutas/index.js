const express=require('express');
const rutas=require('./rutasUsuario');

function rutasApi(app){
    const router=express.Router();
    app.use('/api',router);
    router.use('/usuarios',rutas);
}
module.exports=rutasApi;
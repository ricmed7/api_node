const{usuario,usuarioSchema}=require('./usuarioModel');
function setupModels(sequelize){
    usuario.init(usuarioSchema, usuario.config(sequelize));
}
module.exports=setupModels;
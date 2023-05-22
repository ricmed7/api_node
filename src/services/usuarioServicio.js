const {models}=require('../librerias/sequelize');
class usuarioServicio{
    constructor(){}
    async find(){
        const res=await models.usuario.findAll();
        return res;
    }
    async findOne(id){
        const res=await models.usuario.findByPk(id);
        return res;
    }
    async create(){
        const res=await models.usuario.create(data);
        return res;
    }
    async update(id, data){
        const model=await this.findOne(id);
        const res=await model.update(data);
        return res;
    }
    async delete(id, data){
        const model=await this.findOne(id);
        await model.destroy();
        return {delete:true};
    }
}
module.exports=usuarioServicio;
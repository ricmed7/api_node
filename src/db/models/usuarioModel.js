const{Model, DataTypes}=require('sequelize');
const tabla_usuario='usuario';

class usuario extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName:tabla_usuario,
            modelName:'usuario',
            //modelName:'modelusuario',
            timestamps:true
        }
    }
}
const usuarioSchema={
    idusuario:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER,
        field:'idusuario'
    },
    cedula_identidad:{
        allowNull:false,
        unique:true,
        type:DataTypes.STRING,
        field:'cedula_identidad'
    },
    nombre:{
        allowNull:false,
        type:DataTypes.STRING,
        field:'nombre'
    },
    primer_apellido:{
        allowNull:true,
        type:DataTypes.STRING,
        field:'primer_apellido'
    },
    segundo_apellido:{
        allowNull:true,
        type:DataTypes.STRING,
        field:'segundo_apellido'
    },
    fecha_nacimiento:{
        allowNull:false,
        type:DataTypes.DATE,
        field:'fecha_nacimiento'
    }
}
module.exports={usuario,usuarioSchema};
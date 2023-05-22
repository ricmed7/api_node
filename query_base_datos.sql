--script tabla usuarios
--en la base de datos proyecto_express
create table usuarios(
	idusuario serial primary key,
	cedula_identidad varchar(15) not null unique,
	nombre varchar(50) not null,
	primer_apellido varchar(50) null, 
	segundo_apellido varchar(50) null,
	fecha_nacimiento date null 
);
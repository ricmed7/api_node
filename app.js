const express=require("express");
const dotenv=require('dotenv');
const cors=require('cors');
const rutasApi=require('./src/rutas');

dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.end("mi primer api con nodejs y postgres");
});


rutasApi(app);
const puerto=process.env.PORT || 3000;
app.listen(puerto,()=>{
    console.log('el servidor esta escuchando en el puerto '+puerto);
});

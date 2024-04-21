//1. IMPORTAR LAS DEPENDENCIAS QUE VAMOS A USAR 
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import conexionMongo from './src/config/baseDatos.js';



//2. CONFIGURAR NUESTRO SERVIDOR 
const app = express();
const puerto = 9000;

//2.1 CONFIGURAR LAS VARIABLES DE ENTORNO 
dotenv.config();

//2.2 CONFIGURAR CONEXION BASE DE DATOS
conexionMongo()

//ESTABLECER LA CONEXION CON NUESTRO FRONT
const rutaPublica = path.join(process.cwd(),"public");

app.use(express.static(rutaPublica));

app.use(express.json());

//ESPECIFICAMOS QUE VAMOS A ACCEDER A NUESTRO INDEX.HTML
app.get('/',(req,res) => {
    res.sendFile(path.join(rutaPublica, 'index.html'))
});


//4. INICIALIZAMOS EL SERVIDOR
app.listen(puerto, () => {
console.log(`El servidor esta escuchando en http://localhost:${puerto}`);
});
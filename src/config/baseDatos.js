//IMPORTAMOS LAS DEPENDENCIAS QUE NECESITAMOS
import mongoose from "mongoose";

//CREAR UNA FUNCION QUE NOS CONECTE LA BASE DE DATOS
const conexionMongo = async() => {

await mongoose.connect(process.env.BD_URL,{})

//CONTROL DE ERRORES CON TRY - CATCH
try{
    console.log('Excelente conexion Exitosa');
} catch(error){
    console.log('Error de conexion:'. error.message);
}

}

//TENEMOS QUE EXPORTAR NUESTRA FUNCION PARA LLAMARLA DESDE NUESTRO SERVIDOR
export default conexionMongo
module.exports={
    //Funciones para interactuar con la base de datos para sus funciones CRUD
    obtener:function (connection,funcion) {
        connection.query("SELECT * FROM libro", funcion);
    },
    insertar:function(connection, datos, archivos, funcion){
        connection.query("INSERT INTO libro (titulo, imagen) VALUES (?, ?);", [datos.nombre, archivos.filename], funcion);
    }
}
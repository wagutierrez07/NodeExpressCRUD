module.exports={
    //Funciones para interactuar con la base de datos para sus funciones CRUD
    obtener:function (connection,funcion) {
        connection.query("SELECT * FROM libro", funcion);
    },
    //funcion de insercion de datos, se incluye de esa forma al trabajar con plugins como multer, que sirven para la subida de imagenes
    insertar:function(connection, datos, archivos, funcion){
        connection.query("INSERT INTO libro (titulo, imagen) VALUES (?, ?);", [datos.nombre, archivos.filename], funcion);
    },
    //Funcion especial para el retorno de datos por identificador
    returnDataById:function (connection, id, funcion) {
        connection.query("SELECT * FROM libro where id = ?", [id], funcion);
    },
    //funcion de borrado de datos
    borrar:function (connection,id,funcion) {
        connection.query("DELETE FROM libro where id = ?", [id], funcion);
    }
}
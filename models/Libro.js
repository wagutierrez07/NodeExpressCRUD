module.exports={
    obtener:function (connection,funcion) {
        connection.query("SELECT * FROM libro", funcion);
    }
}
var conn=require("../config/connector")
var libro = require("../models/Libro");

module.exports = {
    index:function (req, res) {

        libro.obtener(conn, function(err,results){
            console.log(results);
        });

        res.render('libros/index', { title: 'Express' });
    }
};
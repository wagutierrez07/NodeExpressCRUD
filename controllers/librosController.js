//Llamado a la conexion de base de datos
var conn=require("../config/connector")
//Llamado al modelo
var libro = require("../models/Libro");

module.exports = {
    index:function (req, res) {
        libro.obtener(conn, function(err,results){
            res.render('libros/index', { title: 'Libros', libro:results });
        });
        },
        create:function (req,res) {
            res.render('libros/crear',  { title: 'Registrar Libros' });
        },
        store:function (req,res) {
            console.log(req.body);
            console.log(req.file.filename);
            libro.insertar(conn, req.body, req.file, function(err,results){
                 res.redirect('/libros');
            });

        }
};
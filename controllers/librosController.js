//Llamado a la conexion de base de datos
var conn=require("../config/connector")
//Llamado al modelo
var libro = require("../models/Libro");
//File System
var borrar = require("fs")

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

        },
        
        delete:function (req,res) {
            console.log("Recepcion de data");
            console.log(req.params.id);
            libro.returnDataById(conn, req.params.id, function (err,register) {
                var nombreImagen = "public/images/"+(register[0].imagen);

      

                //Borrado de archivos, de imagen
                if (borrar.existsSync(nombreImagen)) {
                    borrar.unlinkSync(nombreImagen);
                }
                libro.borrar(conn, req.params.id, function (err) {
                     res.redirect('/libros');
                });
                
            })
        }
};
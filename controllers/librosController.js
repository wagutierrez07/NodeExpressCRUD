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
        //Funcion de eliminacion
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
                
            });
        },
        //Funcion de edicion
        edit:function (req,res) {
            libro.returnDataById(conn, req.params.id, function (err,register) {
                console.log(register);
            res.render('libros/editar',  { title: 'Editar Libro', libro:register[0]});
        });
        },
        update:function name (req,res) {
            console.log(req.body.nombre);
            //actualiar imagenes
            if (req.file) {
            if (req.file.filename) {
                libro.returnDataById(conn, req.body.id, function (err,register) {
                    var nombreImagen = "public/images/"+(register[0].imagen);
    
                    //Borrado de archivos, de imagen
                    if (borrar.existsSync(nombreImagen)) {
                        borrar.unlinkSync(nombreImagen);
                    }
                    libro.actualizarArchivo(conn, req.body, req.file, function (err) {
                       
                    });
                    
                });
            }
        }
                
        if (req.body.nombre) {
            libro.actualizar(conn, req.body, function (err) {
            
            });

        }
             res.redirect('/libros');
        }
};
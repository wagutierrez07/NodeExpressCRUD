var conn=require("../config/connector")
var libro = require("../models/Libro");

module.exports = {
    index:function (req, res) {
        libro.obtener(conn, function(err,results){
            console.log(results);
            res.render('libros/index', { title: 'Libros', libro:results });
        });
        },
        create:function (req,res) {
            res.render('libros/crear',  { title: 'Registrar Libros' });
        },
        store:function (req,res) {
            res.send(req.body);
        }
};
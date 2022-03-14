var express = require('express');
var router = express.Router();
const librosController = require ("../controllers/librosController");

//Multer es un "middleware" de node.js para el manejo de multipart/form-data , el cuál es usado sobre todo para la subida de archivos
var multer = require('multer');
var fecha = Date.now();

//Almacena la ruta de las imagenes que uno sube a una base de datos
var rutaAlmacenamiento = multer.diskStorage({
    destination:function (request, file, callback) {
        callback(null, './public/images');
    },
    filename:function (request, file, callback) {
        console.log(file);
        callback(null, fecha+"_"+file.originalname);
    }

});

var cargar = multer({storage:rutaAlmacenamiento});

/* Codigos que enlazan las rutas y el controlador. */
router.get('/',librosController.index );
router.get('/crear',librosController.create );
router.post("/",cargar.single("archivo"), librosController.store);
module.exports = router;

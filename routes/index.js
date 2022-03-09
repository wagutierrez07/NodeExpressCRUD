var express = require('express');
var router = express.Router();
const librosController = require ("../controllers/librosController");


/* GET home page. */
router.get('/',librosController );

module.exports = router;

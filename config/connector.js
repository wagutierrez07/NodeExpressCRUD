var mysql      = require('mysql');
//Variable para conectar con la base de datos
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'libros'
});

conn.connect();

//Exportand/instanciando el objeto para su realizacion (Ver en controllers)
module.exports = conn;
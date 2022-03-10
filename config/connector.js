var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'libros'
});

conn.connect(

    (err)=>{
      if (!err) {
        console.log("Conexion exitosa");
      }else{
        console.log("Conexion fallida");
      }
    }

);


module.exports = conn;
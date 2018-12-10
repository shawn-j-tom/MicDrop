var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Halo!1234',
    database: 'MicDrop'
});

router.get('/', function(req, res, next) {
    connection.connect();
    connection.query('SELECT * from feedback', function (error, results, fields) {
       if (error) throw error;
       console.log(results);
       res.send(JSON.stringify(results));
   });
});
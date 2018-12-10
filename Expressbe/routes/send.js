var express = require('express');
var mysql = require('mysql');
var bodyParser = require("body-parser");
var route = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Halo!1234',
    database: 'MicDrop'
});


connection.connect();
/*
var rec = {
    name: 'Shawn Tom',
    email: 'shawn.j.tom@gmail.com',
    feedback: 'foo bar',
    reviewed: 'No'
};
var query =connection.query('INSERT INTO `feedback` SET `submitdate`=NOW(),?', rec, function(err, result) {
    if(err) {
        console.error(err);
        return;
    }
    console.error(result);
});
*/

app.post('/send', function(req, res) {
    var sendData = bodyParse.json(req.body);
    console.log(sendData);
    console.log('GOT A REQUEST');
    

    res.end('Success');
    
})

module.exports = router;

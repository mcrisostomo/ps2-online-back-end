var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: '',
    password: '',
    database: ''
});

con.connect(function(err) {
   if(err) return console.log(err);
});
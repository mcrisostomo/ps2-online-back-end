var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'ps2onlinedev'
});

con.connect(function(err) {
   if(err) return console.log(err);
   console.log('Connected!');
});
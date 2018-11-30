const mysql = require('mysql');

module.exports.execSQLQuery = function(sqlQry, res) {
    const con = mysql.createConnection({
        host: '',
        port: '',
        user: '',
        password: '',
        database: ''
    });

    con.query(sqlQry, function(error, results, fields) {
        if(error)
            res.json(error);
        else
            res.json(results);

        con.end();
    })
}

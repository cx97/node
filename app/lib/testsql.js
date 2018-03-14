const mysql = require('mysql');
const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'cx'
});

pool.getConnection(function (err, conn) {
    if (err) console.log("POOL ==> " + err);
    const selectData = function(){
        let selectSQL = 'select * from admin limit 10';
        conn.query(selectSQL,function(err,rows){
            if (err) console.log(err);
            console.log("SELECT ==> ");
            for (var i in rows) {
                console.log(rows[i]);
            }
            conn.release();
        });
    }
    selectData();
});


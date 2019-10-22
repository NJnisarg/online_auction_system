/**
 *  Database connection core file
 */
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'OnlineAuction'

});

conn.connect((err)=> {
    if(err) {
        console.log(err);
        return;
    }

    console.log("Connected successfully. Connection information:" + conn);

});

module.exports = {
    conn
};
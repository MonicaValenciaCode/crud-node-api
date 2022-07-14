const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'vocabulary',
    password :'casa'
});

module.exports = {
    connection
}
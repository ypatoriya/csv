const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'file_store',
});

module.exports = db;
const mysql = require("mysql");
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "admin123",
  database: "myelevator",
  multipleStatements: true,
});
module.exports = db;

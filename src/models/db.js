const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

const db = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("Database connected");
});

module.exports = db;

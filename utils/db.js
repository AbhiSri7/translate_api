const mysql = require("promise-mysql");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.DB_STORE_HOST,
    user: process.env.DB_STORE_USER,
    database: process.env.DB_STORE_DBNAME,
    password: process.env.DB_STORE_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
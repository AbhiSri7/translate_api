const mysql = require("promise-mysql");

const pool = mysql.createPool({
    host: 'db4free.net',
    user: 'abhisrivastav',
    database: 'translate_api',
    password: 'db4freeabhi',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
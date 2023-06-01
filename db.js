const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "35951425",
    host: "localhost",
    port: 5432,
    database: "bank_db",
});

module.exports = pool;

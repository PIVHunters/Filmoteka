const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgress",
    password: 'postgress',
    host: 'localhost',
    port: 5432,
    database: 'filmoteka'
})

module.exports = pool

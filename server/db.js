const {Pool} = require('pg').Pool //Реализация подключения к бд с помощью pool
const pool = new Pool({
    user: "postgres",
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'filmoteka'
})

module.exports = pool

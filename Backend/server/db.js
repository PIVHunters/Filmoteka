const Pool = require('pg').Pool //Реализация подключения к бд с помощью pool
/**
 * Объект класса Pool модуля 'pg'
 * Содержит в себе параметры для подключения к бд
 * @type {Object}
 */
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})
pool.connect()


// async function select(){
//     let r = await pool.query('SELECT * FROM "User"');
//     return JSON.stringify(r)
// }
module.exports = {pool}

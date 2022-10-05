const  { Client }  = require('pg')

const databaseConfig = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'rio_backend_2',
    port: 5432,
    password: 'kamiki321#'
})

module.exports = databaseConfig
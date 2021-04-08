
var mysql = require('mysql')
require('dotenv').config()

const pool = mysql.createPool({
 
 host : 'db-mysql-blr1-35944-do-user-8703439-0.b.db.ondigitalocean.com',
   user: 'doadmin',
    password : 'r5c1d14p7xg6e2sr',
    database: 'demo',
    port:'25060' ,
    multipleStatements: true
  })


module.exports = pool;
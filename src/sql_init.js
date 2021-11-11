//Sql server initializer
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.HOST);
console.log(process.env.USER);
console.log(process.env.PASS);
console.log(process.env.DATABASE);
const con = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASS,
	database: process.env.database
});
module.exports=con;
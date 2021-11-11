//This program start the app at port number given by env file.
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT; 
const app= express();
console.log(PORT);

//console.log('check');
app.listen(PORT);
module.exports= app;
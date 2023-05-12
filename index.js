// const http = require('http');

// //req is request from the sever, res is response to the user (important concept)
// http.createServer((req,res)=>{
//     res.write('<h1> Welcome to my class </h1>');
//     res.end(); //use this to end the loop
// }).listen(8080);

//Imports
const express = require('express');
const morgan = require('morgan');

//App Init
const app = express();

//First Route

app.get('/',(req,res)=>{
    res.json({message: "Welcome to the class"})
});

app.listen('8080');
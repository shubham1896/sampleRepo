const express = require('express');

var app = express();

app.get("/",(req,res)=> {
    res.write("<h1>This is a test app</h1>");
})

app.get("/test",(req,res)=> {
    res.write("<h1>Test completed</h1>");
})

app.listen(3000);
console.log("app is listening to port: 3000");
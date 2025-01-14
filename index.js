const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({extended : true}))

app.get("/", function(req , res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/index.html", function(req , res){
    res.sendFile(__dirname + "/index.html");
});


app.listen(3000, function (){
    console.log("Server started on port");
}); 
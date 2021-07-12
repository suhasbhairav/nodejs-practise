const express = require("express");

var app = express();

app.get("/", function (req, res){
    console.log(req.params);
    res.send("Hello World!!");
});

app.get("/numbers", function (req, res){
    var arr = new Array(3);
    arr.push(1);
    arr.push(2);
    arr.push(3);
    res.send(arr);
});

app.get("/names", function (req, res){
    var arr = new Array(3);
    arr.push("Google");
    arr.push("Facebook");
    arr.push("Microsoft");
});
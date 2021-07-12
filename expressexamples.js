const express = require("express");

var app = express();

app.get("/", function (req, res){
    console.log(req.params);
    res.send("Hello World!!");
});

app.get("/numbers", function (req, res){
    var arr = new Array();
    arr.push(1);
    arr.push(2);
    arr.push(3);
    res.send(arr);
});

app.get("/names", function (req, res){
    var arr = new Array();
    arr.push("Google");
    arr.push("Facebook");
    arr.push("Microsoft");

    res.send(arr);
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Listening to %s:%s", host, port);
})
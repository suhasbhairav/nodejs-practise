const express = require("express");

var app = express();
var values = new Array();

app.get("/", function(req, res){
    console.log("inside");
    var arr = new Array();
    arr.push("Zurich");
    arr.push("London");
    arr.push("Munich");

    res.send(arr);
});

app.get("/countries", function(req, res){
    var arr = new Array();
    arr.push("Switzerland");
    arr.push("UK");
    arr.push("Germany");

    res.send(arr);
});

app.get("/numbers", function(req, res){
    res.send("1,2,3");

});


var server = app.listen(8081, function(){
    var address = server.address().address;
    var port = server.address().port;

    console.log("Listening to %s %s", address, port);
});
const fs = require("fs");

fs.readFile('input.txt', function(err, data){
    if(err){
        console.log("error while reading");
    }else{
        console.log(data.toString());
    }
});

const fileReaderHandler = require("fs");
fileReaderHandler.readFile("input.txt", function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});
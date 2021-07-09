const fs = require("fs");
var data = fs.readFileSync("input.txt");
console.log(data.toString());

const fileReaderHandler = require("fs");
var content = fileReaderHandler.readFileSync("input.txt");
console.log(content.toString())
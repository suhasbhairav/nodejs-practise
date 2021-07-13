const fs = require("fs");
var data = fs.readFileSync("input.txt");
console.log(data.toString());

const fileReaderHandler = require("fs");
var content = fileReaderHandler.readFileSync("input.txt");
console.log(content.toString())

const fs1 = require("fs");
var dataContent = fs1.readFileSync("test.txt");
console.log(dataContent.toString());

const fs2 = require("fs");
var content2 = fs2.readFileSync("input.txt");
console.log(content2.toString());
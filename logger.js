var url = 'http://mylogger.io/log';
var name = "Suhas";
var number = 10;

function log(message){
    //Send http
    console.log(message);
}

module.exports.log = log;
module.exports.endpoint = url;
module.exports.name = name;
module.exports.age = number;
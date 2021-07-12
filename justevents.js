const events = require("events");
var eventEmitter = new events.EventEmitter();

var receiveDataHandler = function captureData(){
    console.log("this is inside the function...");
}

eventEmitter.on("receive_data", receiveDataHandler);
const events = require("events");
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log("inside-1");
    eventEmitter.emit("data_sent");
}

var connect2handler = function twoConnected(){
    console.log("inside-2");
    eventEmitter.emit("new_data");
}

eventEmitter.on("just_data", connectHandler);
eventEmitter.on("data_sent", function(){
    console.log("data received...");
});
eventEmitter.emit("just_data");


const events = require("events");
var eventEmitter = new events.EventEmitter();

var eventHandler = function receive(){
    console.log("Inside receive()");
    eventEmitter.emit("event_created");
}

eventEmitter.on('connect', eventHandler);

eventEmitter.on('event_created', function(){
    console.log('Event has been received.');
});

eventEmitter.emit('connect');
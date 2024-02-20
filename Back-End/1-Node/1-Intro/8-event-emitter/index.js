const EventEmitter = require("events");

const customerEmitter = new EventEmitter();

// Creating Event
// on("eventType","listner function")
customerEmitter.on("response", (firstName, lastName) => {
    console.log(`The recevied data: ${firstName}, ${lastName}`);
});

customerEmitter.on("response", (id) => {
    console.log(`The recived data:${id}`);
});

customerEmitter.on("response", () => {
    console.log("Event Emitter function without data");
});

customerEmitter.on("display", (message) => {
    console.log(`The recived message is: ${message}`);
});
// calling the Event
// emit("eventName","value")
customerEmitter.emit("response", "SkillSafari", "Edukeys");
// customerEmitter.emit("response", 25);
// customerEmitter.emit("response");
customerEmitter.emit("display", "Hello...");

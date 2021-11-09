const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

//  This object exposes, among many others, the on and emit methods.
//  `emit` is used to trigger an event
//  `on` is used to add a callback function that's going to be executed when the event is triggered

eventEmitter.on('start', () => {
    console.log('started');
});
eventEmitter.emit('start');

//  You can pass arguments to the event handler by passing them as additional arguments to emit():
eventEmitter.on('start2', number => {
    console.log(`started ${number}`);;
});
eventEmitter.emit('start2', 23);

//  multiple arguments
eventEmitter.on('start3', (start, end) => {
    console.log(`started from ${start} to ${end}`);
});
eventEmitter.emit('start3', 1, 100);

/*
D:\daryll\nodejs\eventemitter>node eventemittersample1.js
started
started 23
started from 1 to 100
 */
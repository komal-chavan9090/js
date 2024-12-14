const eventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('event',function(){
    console.log('Event triggered');
});

myEmitter.on('close',function(){
    console.log('Event triggered');
});

myEmitter.emit('close');
var EventEmitter = require('events')

class Gym extends EventEmitter{
    myThing() {
       setInterval(() => {
        this.emit('boom')
       }, 1000);
    }
}

var myGym = new Gym() 
myGym.on('boom', function() {
    console.log(`Athlete is working out`)
})

myGym.myThing()
var events = require('events');
function carShow() {
    events.EventEmitter.call(this);
    this.seeCar = function(make) {
        this.emit('sawCar', make);
    }
}

carShow.prototype = events.EventEmitter.prototype;

var show = new carShow();

function logCar(make) {
    console.log("Saw a car", make);
}

function logColorCar(make, color) {
    console.log("Saw a %s %s", color, make);
}

var show = new carShow();
show.on('sawCar', logCar);
show.on('sawCar', function(make) {
    var colors = ['red', 'green', 'blue'];
    var color = colors[Math.floor(Math.random()*3)];

    logColorCar(make, color);
})

show.seeCar('Laborgini');
show.seeCar('alto');
show.seeCar('Maruti');
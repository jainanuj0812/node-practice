function logCar(msg, callback) {
    process.nextTick(function () {
        callback(msg);
    })
}

var cars = ['ferrari', 'alto', 'Maruti'];

for(var idx in cars) {
    var message = 'Saw a ' + cars[idx];
    logCar(message, function () {
         console.log("Normal callback" + message);
    })
}

for(var idx in cars) {
    var message = 'Saw a ' + cars[idx];
    (function(msg) {
        console.log(msg);
        logCar(msg, function() {
            console.log("closure callback" + msg);
        })
    })(message);
}
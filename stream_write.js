var stream = require('stream');

var util = require('util');

util.inherits(Writer, stream.Writable);
function Writer(opt) {
    stream.Writable.call(this, opt);
    this.data = new Array();
}

Writer.prototype._write = function(data, encoding, callback) {
    this.data.push(data.toString('utf8'));
    callback();
}

var w = new Writer()

for (var i = 0; i < 5; i++) {
    w.write("data pushed " + i, 'utf8', function(){
        console.log("data pushed");
    })
}

console.log("====", w.data);




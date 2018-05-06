var stream = require('stream');
var util = require('util');

util.inherits(Answers, stream.Readable);

function Answers(opt) {
    stream.Readable.call(this, opt);
    this.quotes = ['yes', 'no', 'maybe'];
    this._index = 0;
}

Answers.prototype._read = function() {
    if(this._index > this.quotes.length) {
        this.push(null)
    } else {
        this.push(this.quotes[this._index])
        this._index++;
    }
}

var r = new Answers();
console.log("Direct Read ", r.read().toString());
r.on('data', function(data) {
    console.log("callback ", data.toString());
});

r.on('end', function() {
    console.log("no more data");
})
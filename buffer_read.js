var buf = new Buffer('my name is khan', 'utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toString('utf8', 2, 3));

var StringDecoder  = require('string_decoder').StringDecoder;
var decoder = new StringDecoder();
console.log(decoder.write(buf));
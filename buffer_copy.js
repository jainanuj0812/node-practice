var buf = new Buffer('abcdefghijklmnopqrstuvwxyz');
console.log(buf.toString());

var blank = new Buffer(26);
blank.fill();
console.log(blank.toString());

buf.copy(blank);

console.log(blank.toString());

var dashes = new Buffer(26);
dashes.fill('-');

console.log(dashes.toString());

buf.copy(dashes, 5, 10, 16);
console.log(dashes.toString());





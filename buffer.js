var buf256 = new Buffer(256);

buf256.fill(0);
console.log(buf256);
buf256.write("Add some text");
console.log(buf256);
console.log(buf256.toString());
buf256.write("Anuj Jain", 9, 10);
console.log(buf256.toString());
buf256[10] = 82;
console.log(buf256.toString());


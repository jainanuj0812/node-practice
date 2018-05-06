var fs = require('fs');
var arr = ['Anuj', 'Jain', 'HTML'];
fd = fs.openSync('anuj.txt', 'w');
while(arr.length) {
	a = arr.pop() + " ";
	var bytes = fs.writeSync(fd, a, null, null);
	console.log("wrote %s %dbytes", a, bytes);
}
fs.closeSync(fd);

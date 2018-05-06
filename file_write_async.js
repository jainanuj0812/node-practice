var fs = require('fs');
var fruits = ['apple', 'orange', 'banana', 'kiwi'];

function writeFruit(fd) {
	if (fruits.length) {
		var fruit = fruits.pop() + " ";
		fs.write(fd, fruit, null, null, function(err, bytes) {
			if (err) {
				console.log("====", err);
			} else {
				console.log("Wrote %s %dbytes", fruit, bytes);
				writeFruit(fd);
			} 
		})
	} else {
		fs.close(fd);
	}
}

fs.open('fruit.txt', 'w', function (err, fd) {
	writeFruit(fd);
})

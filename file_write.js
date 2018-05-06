var fs = require('fs');
var strng = "this is the test string";
var options = {encoding: 'utf8', flag: 'w'};
fs.writeFile('config.txt', strng, options, function(err) {
	if (err) {
		console.log("======", err);	
	} else {
		console.log("saved succcessfully");
	}
})

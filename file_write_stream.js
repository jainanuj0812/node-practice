var fs = require('fs');
var arr = ['anuj', 'jain', 'temp'];

var options = { encoding: 'utf8', flag: 'w' };

var fileWriteStream = fs.createWriteStream('temp.txt', options);

fileWriteStream.on('close', function() {
    console.log("File Closed");
});

while(arr.length) {
    var data = arr.pop()+" ";
    fileWriteStream.write(data);
    console.log("wrote ", data);
}

fileWriteStream.end();
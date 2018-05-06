var fs = require('fs');

var options  = { encoding: 'utf8', flag: 'r'};

fs.readFile('temp.txt', options, function(err, data) {
    if(err) {

    } else {
        console.log(data);
    }
});

// Read sync: method used readSync(fd, buffer, offset, length, position)

fd = fs.openSync('temp.txt', 'r');
var str = "";

do {
    var buf = new Buffer(5);
    buf.fill();
    var bytes = fs.readSync(fd, buf, null, 5);

    console.log("===bytes", bytes);

    str = str + buf.toString();
} while (bytes > 0);

fs.closeSync(fd);
console.log("Output==", str);

// Sync files uses do while, Asyc file read uses recurssion.

// Async file read method: read(fd, buffer, offset, length, position, callback)

function readArr(_fd, str) {
    var buf = new Buffer(5);
    buf.fill();
    fs.read(_fd, buf, 0, 5, null, function(err, byte, data){
        if (byte > 0) {
            console.log("read async ", byte);
            str = str + data;
            readArr(_fd, str);
        } else {
            fs.close(_fd);
            console.log("file Closed", str);
        }
    })
}
fs.open('temp.txt', 'r', function(err, _fd) {
    readArr(_fd, "");
})


// Using stream

var fileReadStream = fs.createReadStream('temp.txt', options);

fileReadStream.on('data', function(chunk) {
    console.log("======stream===", chunk);
});

fileReadStream.on('close', function() {
    console.log("======closed stream======");
})
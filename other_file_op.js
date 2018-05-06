var fs = require('fs');
fs.exists('temp.txt', function(exists) {
    console.log("=====async======", exists);
})

var isExist = fs.existsSync('temp.txt');

console.log("========sync======", isExist);
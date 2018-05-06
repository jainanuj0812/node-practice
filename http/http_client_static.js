var http = require('http');
var options = {
    hostname: 'localhost',
    port: '8080',
    path: '/hello.html'
};

function handleResponse(res) {
    var serverData = '';
    res.on('data', function(chunk) {
        serverData += chunk;
    });
    res.on('end', function() {
        console.log(serverData);
    })
}

http.request(options, function(response) {
    handleResponse(response);
}).end();
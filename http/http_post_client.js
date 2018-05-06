var http = require('http');

var options = {
    host: 'localhost',
    path: '/',
    port: '8080',
    method: 'POST'
}

function readJSONResp(res) {
    var data = '';
    res.on('data', function(chunk) {
        data += chunk;
    });
    res.on('end', function() {
        console.log(data);
    })
}

var req = http.request(options, readJSONResp);
req.write('{"name": "Anuj", "occupation": "Burglar"}');
req.end();
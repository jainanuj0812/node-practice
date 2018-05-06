var http = require('http');

var options = {
    hostname: 'https://localhost',
    path: '/commerce/control/getCartDetail',
    port: '8443',
    method: 'POST'
}

var req = http.request(options, function(res) {
    var str = '';
    res.on('data', function(chunk) {
        str += chunk;
    });

    res.on('end', function() {
        console.log('end');
    })
})

req.end();
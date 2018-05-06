var http = require('http');
http.createServer(function(req, res) {
    var data = '';
    req.on('data', function(chunk) {
        data += chunk;
    });

    req.on('end', function() {
        var reqObj = JSON.parse(data);
        console.log(reqObj);
        var resObj = {
            message: 'Hello '+reqObj.name,
            question: 'Are you a good '+reqObj.occupation+' ?'
        }

        res.writeHead(200);
        res.end(JSON.stringify(resObj));
    });
}).listen(8080);

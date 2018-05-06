var url = require('url');
var urlStr = 'http://user:password@host.com:80/reource/path?query=string#hash';
var urlObj = url.parse(urlStr, true, false);  //pasrse method 1.parameter = url 2.parameter = boolean(parsequerystring) 3.parameter = boolean(slashdenaotehost)
var urlObjSlashsDenoteHost = url.parse(urlStr, true, true);

console.log(" ====slashes=== ", urlObjSlashsDenoteHost);
console.log("=====urlobj====", urlObj);

// Url Resolve

var newResoure = '/another/path?queryNew'

console.log(url.resolve(urlStr, newResoure));


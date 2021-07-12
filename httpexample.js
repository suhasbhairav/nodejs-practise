const http = require("http");

http.createServer(function(req, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('This is a server response');
}).listen(8081);
const http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end("This is a simple response");
}).listen(8081);
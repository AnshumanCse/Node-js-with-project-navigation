// http module
const http = require("http");
const server = http.createServer((req, res) =>{
    res.writeHead(200,{"content-type": "text/html"});
    res.write("<p> Helo node js project first</p>")
    // req -> request
    // res -> response

}).listen(8999)


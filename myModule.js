const http = require("http")
// const url = require("url")
// http.createServer((req, res) => {
//     res.writeHead(200, {"content-type": "text/html"});
//     res.write("<h1> this is module page</h1>")
//     // req.url("https://google.com")
//     // console.log(url)

// }).listen(8889)
//############# fs module file module

// const fs = require('fs')
//readFile
// fs.readFile('filename', (err, data) =>{
    //declaration mathod
// })

// fs.readFile('./index.html',(err, data) =>{
//     if(err){
//         console.log("error");
//         console.log(err);
//     }else{
//         console.log("data found")
//         console.log(data.toString());

//     }
 
// });

// url module
const url = require("url");

http.createServer((req, res) =>{

    res.writeHead(200, {"content-type": "text/html"});
    res.write("<p>this is url modules<p/>")
    console.log(req.url);


}).listen(8884)
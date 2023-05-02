//path navigation in website
const url = require("url")
const http = require("http")
const fs = require("fs");           
const path = require("path");

http.createServer((req, res) => {

    const path = req.url
    if(path=='/'){

        res.writeHead(200,{'content-type':'text/html'
    });
    const fileContent = fs.readFileSync("./index.html")
    res.write(fileContent);
    res.end();


        console.log("Home page")

    }else if(path=='/about'){
        res.writeHead(200,{'content-type':'text/html'
    });
    const fileContent2 = fs.readFileSync("./about.html")
    res.write(fileContent2);
    res.end();
        console.log("about page")

    }
    // else if(path=='/'){
    //     res.writeHead(200,{'content-type':'text/html'
    // });
    // const fileContent3 = fs.readFileSync("./index.html")
    // res.write(fileContent3);
    // res.end();
    // console.log("redirecting to the home page")

    // }
    
    else if(path=='/services'){
        console.log("services page")
    }
    else {
        console.log("Error 404 page not find ")
    }
    res.end();




}).listen(5559);
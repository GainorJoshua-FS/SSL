const fs = require("fs");
const http = require("http");

http.createServer((request,response) =>{

    const slug = request.url === '/' ? 'test' : request.url
    fs.readFile( `${slug.replace(/^\//,'').replace('.html','')}.html`, (error,data) =>{
        response.writeHead(200)
        response.end(data)
    })

}).listen(8000)
const fs = require("fs");
const http = require("http");

http.createServer((request,response) =>{

    const slug = request.url === '/' ? 'index' : request.url
    fs.readFile( `${slug.replace(/^\//,'').replace('.html','')}.html`, (error,data) =>{
        response.writeHead(200)
        response.write("<script>var home='Home';</script>");
        response.write("<script>var gray='Grayscale';</script>");
        response.write("<script>var theme='Themes';</script>");
        response.end(data)
    })

}).listen(8000)
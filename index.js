const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT;
// const host = "localhost";


const server = http.createServer((req, res) => {
    fs.readFile('../HtML/start.html',(err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            if(req.url === "/"){
            res.end(data);
            }
            else if(req.url === "/about"){
                res.end("<h1>This is About Page</h1>");
            }
            else if(req.url==="/contact"){
                res.end("<h1>This is Contact Page</h1>");
            }
            else if(req.url === "/gallery"){
                res.end("<h1>This is Our Gallery</h1>");
            }
            else{
                res.end("<h1>404 Page Not Found</h1>");
            }
        }
    }) 
});

server.listen(PORT, ()=>{
    console.log(`Server is working...`);
});
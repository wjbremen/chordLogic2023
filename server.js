const http = require("http");
const fs = require('fs').promises; 
const host = 'localhost'; 
const port = 8000; 

const requestListener = function(req,res) {
    fs.readFile(__dirname + "/playAudioTest.html").then(contents => {
        console.log(req); 
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200); 
        res.end(contents);
    });  
}

const server = http.createServer(requestListener);
server.listen(port,host,()=> {
    console.log("server is running on "+ host + ":" + port); 
});
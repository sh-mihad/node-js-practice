const http = require("http")

const server = http.createServer((req,res)=>{
    res.end("hello world")
})

server.listen(5000,'127.0.0.1',()=>{
    console.log("server running on 5000 port");
})
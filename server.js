const http = require("http");
const fs = require('fs')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://testAdmin:testAdmin1234@cluster0.9wlze.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const client = new MongoClient(uri, { 
  serverApi: { 
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 }); 
    console.log("Pinged your deployment. You successfully connected to MongoDB!");


    const server = http.createServer((req, res) => {
      if (req.url === "/home" && req.method === "GET") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("hello world from home");
      } else if (req.url === "/post" && req.method === "GET") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("hello world from post");
      } else if (req.url === "/card" && req.method === "GET") {
        res.writeHead(200, { "content-type": "text/html" });
        fs.readFile("./card.html","utf-8",(err,data)=>{
            console.log("data",data);
            if(err){
                res.end("something went wrong")
            }else{
                res.end(data)
            }
        })
      } else {
        res.writeHead(404, "Not Found", { "content-type": "text/plain" });
        res.end("Data Not Found");
      }
    });
    
    server.listen(5000, "127.0.0.1", () => {
      console.log("server running on 5000 port");
    });






  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



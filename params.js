const http = require("http")
const posts = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    content: "Closures are functions that remember their lexical scope even when executed outside of it.",
    author: "Sabbir Hossen",
    date: "2025-01-28"
  },
  {
    id: 2,
    title: "Introduction to Node.js Events Module",
    content: "The events module in Node.js enables asynchronous event-driven architecture.",
    author: "John Doe",
    date: "2025-01-27"
  },
  {
    id: 3,
    title: "Learn React in 5 Minutes",
    content: "React is a JavaScript library for building user interfaces efficiently.",
    author: "Jane Smith",
    date: "2025-01-26"
  },
  {
    id: 4,
    title: "Exploring MongoDB for Beginners",
    content: "MongoDB is a NoSQL database that stores data in JSON-like documents.",
    author: "Alice Brown",
    date: "2025-01-25"
  },
  {
    id: 5,
    title: "CSS Flexbox Guide",
    content: "Flexbox is a powerful layout tool for creating responsive designs.",
    author: "Michael Scott",
    date: "2025-01-24"
  }
];


const server = http.createServer((req,res)=>{
 const parsedUrl = new URL(req.url,`http://${req.headers.host}`)
 const query = parsedUrl.searchParams
 
 if(parsedUrl.pathname === "/post"){
   if(query.get("id")){
    res.writeHead(200,{'content-type':'application/json'})
    const findData = posts.find(item=>item.id == query.get("id"))
    res.end(JSON.stringify(findData))
   }else{
    res.end(JSON.stringify(posts))
   }
 }
})

server.listen(5001,"127.0.0.1", () => {
  console.log("server running on 5001 port");
})
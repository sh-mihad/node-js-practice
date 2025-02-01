const express = require("express")

const app = express()
const port = 5000
//routes
const postRouter = require("./src/posts/posts")
app.use(express.json())
app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/card.html")
})

app.use("/posts",postRouter)
app.listen(port,()=>{
    console.log("server running on port 5000");
})
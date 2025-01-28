const fs = require("fs")

// this approach using readFile and write file method but this is not appropriate solution
// const data = fs.readFile("./data/output.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("there was an error-",err);
//     }else{
//         console.log(data);
//         fs.writeFile("./data/input.txt",data,(err)=>{
//             console.log("there was an write error- ", err);
//         })
//     }

// })

// using streaming method :  createReadStream and createWriteStream

// make event emitter for read and write
const readStream = fs.createReadStream("./data/output.txt","utf-8") 
const writeStream = fs.createWriteStream("./data/input.txt","utf-8")

// make a event listener 
// readStream.on("data",(data)=>{ 
//   writeStream.write(data,(err)=>{
//      if(err){
//         throw new Error("there was an error")
//      }
//   })
// })

// another approach for read and write using stream
readStream.on("data",(data)=>{
  readStream.pipe(writeStream)
})



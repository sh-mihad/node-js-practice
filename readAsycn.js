const fs = require("fs")

 fs.readFile("data.text","utf-8",(err,data)=>{
    if(err){
        console.log("there was an error");
    }else{
        console.log(data);
    }
})

fs.writeFile("./data/asyncWrite.txt","this is another asyncronus file writing",(err)=>{
    if(err){
        console.log("there was an error");
    }else{
        console.log("file successfully create");
    }
})
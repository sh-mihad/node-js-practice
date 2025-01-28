const fs = require("fs")

const data = fs.readFileSync("./data.text",{encoding:"utf8",flag:"r"})

console.log(data);
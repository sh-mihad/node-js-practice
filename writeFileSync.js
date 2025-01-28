const fs = require("fs")

const data = "This is a file containing a collection";

fs.writeFileSync("./data/write.txt",data)
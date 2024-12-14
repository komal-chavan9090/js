const fs = require("fs");

fs.appendFileSync("read.txt","welcome to the wce!!!!")

const data=fs.readFileSync("read.txt")
console.log(data.toString())
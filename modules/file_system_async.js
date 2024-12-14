const fs=require("fs");

fs.writeFile("hello.txt","hello world",function(err)
{
    console.log("callback function called");
    console.log("error",err)
})
const readline=require('readline');

const r1=readline.createInterface({input:process.stdin,output:process.stdout});

let n1=Math.floor(Math.random()*10)+1;
let n2=Math.floor(Math.random()*10)+1;

let answer=n1+n2;

r1.question(`what is ${n1} + ${n2}? `,(userinput)=>{
    console.log(userinput);
    if(userinput==answer) console.log("correct answer");
    else console.log("wrong answer");
});


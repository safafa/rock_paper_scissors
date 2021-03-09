
function computerPlay(){
const computer = ["rock","paper","scissors"];
return computer[Math.floor(Math.random()*computer.length)] ;
}

console.log(computerPlay());
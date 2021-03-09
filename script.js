
function computerPlay(){
const computer = ["rock","paper","scissors"];
return computer[Math.floor(Math.random()*computer.length)] ;
}


function playRound(playerSelection, computerSelection) {
    const p = playerSelection.toLowerCase();
    if(p === computerSelection){
        return "it's a tie"
    }else{
        if(p === "rock" && computerSelection === "paper" ){
            return "You Lose! Paper beats Rock";
        }
        if(p === "paper" && computerSelection === "rock" ){
            return "You Win! Paper beats Rock";
        }
        if(p === "scissors" && computerSelection === "paper" ){
            return "You Win! Scissors  beats Paper";
        }
        if(p === "paper" && computerSelection === "scissors" ){
            return "You Lose! Scissors  beats Paper";
        }
      
        if(p === "rock" && computerSelection === "scissors" ){
            return "You Win! Rock beats Scissors";
        }
        if(p === "scissors" && computerSelection === "rock" ){
            return "You Loose! Rock beats Scissors";
        }
      
    }
    
    
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
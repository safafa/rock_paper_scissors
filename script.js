
function computerPlay(){
const computer = ["rock","paper","scissors"];
return computer[Math.floor(Math.random()*computer.length)] ;
}


function playRound(playerSelection, computerSelection) {
    const p = playerSelection.toLowerCase();
    if(p === computerSelection){
        return ["it's a tie","t"]
    }else{
        if(p === "rock" && computerSelection === "paper" ){
            return ["You Lose! Paper beats Rock","c"];
        }
        if(p === "paper" && computerSelection === "rock" ){
            return ["You Win! Paper beats Rock","p"];
        }
        if(p === "scissors" && computerSelection === "paper" ){
            return ["You Win! Scissors  beats Paper","p"];
        }
        if(p === "paper" && computerSelection === "scissors" ){
            return ["You Lose! Scissors  beats Paper","c"];
        }
      
        if(p === "rock" && computerSelection === "scissors" ){
            return ["You Win! Rock beats Scissors","p"];
        }
        if(p === "scissors" && computerSelection === "rock" ){
            return ["You Loose! Rock beats Scissors","c"];
        }
      
    }
    
    
  }
  
  function game(){
      let pscore = 0;
      let cscore = 0;
      
      let round = [];
      for(var i=0;i<5;i++){
        let playerSelection = window.prompt("Enter your choice", "paper");
          round = playRound(playerSelection, computerPlay());
          console.log(round[0]);
        if(round[1] === "p"){
            pscore++;
        }else if( round[1] === "c"){
            cscore++;
        }
      }
      console.log("The end !")
      if(pscore > cscore){
          return "Congratulations the Winner is you ! your score is : " + pscore ;
      }else if(pscore < cscore){
        return "You Lose ! your score is : " + pscore ;
      }else {
          return "it's a tie "
      }
  }

  console.log(game());
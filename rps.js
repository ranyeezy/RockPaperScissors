function playRound(playerSelection, computerSelection){
    
    if(playerSelection === "rock" && computerSelection === "scissor") {
        return alert("You win! Rock beats scissors")
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        return alert("You lose! Paper beats rock")
    }
    else if(playerSelection === "rock" && computerSelection === "rock") {
        return alert("Tie!")
    }

}

function computerPlay(){
    return "scissor";
}
let playerSelection = "action";

function pickAction(){
    playerSelection = prompt("Please enter rock, paper, or scissor");
}





function playGame(){
    const computerSelection = computerPlay();
    const playerSelection = prompt("Please enter rock, paper, or scissor");
    playRound(playerSelection, computerSelection)

}


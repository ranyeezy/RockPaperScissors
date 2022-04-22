let playerSelection = "action";
let computerSelection = "action";
const computerActions = ["rock", "paper", "scissors"];

function results(playerSelection, computerSelection){
    
    if(playerSelection === "rock" && computerSelection === "scissors") {
        return alert("You win! Rock beats scissors")
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        return alert("You lose! Paper beats rock")
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        return alert("You lose! Scissors beats paper")
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        return alert("You Win! Paper beats rock")
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        return alert("You lose! Rock beats scissors")
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        return alert("You win! Scissors beats paper")
    }
    else {
        return alert("Tie")
    }

}

function computerAction(){
    const randomIndex = Math.floor(Math.random() * computerActions.length);
    return computerActions[randomIndex];
}

function pickAction(){
    playerSelection = prompt("Please enter rock, paper, or scissors")
    if(playerSelection != null){
        playerSelection.toLowerCase();
    }
    return playerSelection;
}


function playGame(){
    
    playerSelection = pickAction();
    if(playerSelection != "rock" || playerSelection === "paper" || playerSelection === "scissors"){
        alert("You didnt type your action or you mispelled it!")
    }
    else{
    computerSelection = computerAction();
    alert("Computer picks " + computerSelection)
    
    results(playerSelection, computerSelection)
    }

}


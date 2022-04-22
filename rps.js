let playerSelection = "action";
let computerSelection = "action";
const computerActions = ["rock", "paper", "scissors"];
const resultDisplay = document.querySelector('[data-game-results]')

function results(playerSelection, computerSelection){
    
    if(playerSelection === "rock" && computerSelection === "scissors") {

        resultDisplay.innerHTML = "You win! Rock beats scissors"
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        resultDisplay.innerHTML = "Computer picked PAPER! You LOSE!"    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        resultDisplay.innerHTML = "Computer picked SCISSORS! You LOSE!"    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        resultDisplay.innerHTML = "Computer picked ROCK! You WIN!"    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        resultDisplay.innerHTML = "Computer picked ROCK! You LOSE!"    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        resultDisplay.innerHTML = "Computer picked PAPER! You WIN!"    }
    else {
        resultDisplay.innerHTML = "TIE!"    }

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

function resetResult(){
    resultDisplay.innerHTML = "Click Play Game When Ready!"
}

function playGame(){
    
    
    playerSelection = pickAction();
    if(playerSelection != "rock" || playerSelection === "paper" || playerSelection === "scissors"){
        alert("You didnt type your action or you mispelled it!")
    }
    else{
    computerSelection = computerAction();
    
    results(playerSelection, computerSelection)
    }

}




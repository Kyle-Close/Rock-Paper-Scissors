function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); // Generate random number between 0 - 2
    switch(choice){
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function getPlayerChoice(){
    let choice = prompt("Enter selection (Rock, Paper, Scissors)");
    return choice.toUpperCase();
}

function play(playerSelection, computerSelection){
    let loseString = `You lose. Computers ${computerSelection} beats your ${playerSelection}`;
    let winString = `You win! Your ${playerSelection} beats the computers ${computerSelection}`;
    let drawString = `Draw. You both chose ${playerSelection}`;

    if(playerSelection == computerSelection){
        return drawString;
    }

    else if(playerSelection == "ROCK"){
        if(computerSelection == "PAPER"){
            return loseString;
        }    
        else{
            return winString;
        }
    }
    else if(playerSelection == "PAPER"){
        if(computerSelection == "ROCK"){
            return winString;
        }    
        else{
            return loseString;
        }
    }
    else if(playerSelection == "SCISSORS"){
        if(computerSelection == "ROCK"){
            return loseString;
        }    
        else{
            return winString;
        }
    }
}

function game(){
    console.log("Welcome to Rock Paper Scissors! This is a best of 5 match");
    let playerScore = 0;
    let computerScore = 0;

    while(playerScore < 3 && computerScore < 3){
        let result = play(getPlayerChoice(), getComputerChoice());
        console.log(result);

        if(result.startsWith("You win")){
            playerScore++;
        }
        else if(result.startsWith("You lose")){
            computerScore++;
        }
    }
    if(playerScore == 3){
        console.log(`Congrats! You won ${playerScore} to ${computerScore}.`);
    }
    else{
        console.log(`You lost. Computer won ${computerScore} to ${playerScore}.`);
    }
}

game();
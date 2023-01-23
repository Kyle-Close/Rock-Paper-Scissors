let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".btn");
const resultContainer = document.querySelector(".result");

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    result = play(getPlayerChoice(event), getComputerChoice());
    checkForWinner(result);
  });
});



function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3); // Generate random number between 0 - 2
  switch (choice) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

function getPlayerChoice(event) {
  return event.target.id.toUpperCase();
}

function play(playerSelection, computerSelection) {
  let loseString = `You lose. Computers ${computerSelection} beats your ${playerSelection}`;
  let winString = `You win! Your ${playerSelection} beats the computers ${computerSelection}`;
  let drawString = `Draw. You both chose ${playerSelection}`;

  if (playerSelection == computerSelection) {
    return drawString;
  } else if (playerSelection == "ROCK") {
    if (computerSelection == "PAPER") {
      return loseString;
    } else {
      return winString;
    }
  } else if (playerSelection == "PAPER") {
    if (computerSelection == "ROCK") {
      return winString;
    } else {
      return loseString;
    }
  } else if (playerSelection == "SCISSORS") {
    if (computerSelection == "ROCK") {
      return loseString;
    } else {
      return winString;
    }
  }
}

function resetScores(){
	playerScore = 0;
	computerScore = 0;
}

function checkForWinner(result) {
  if (result.startsWith("You win")) {
    playerScore++;
  } else if (result.startsWith("You lose")) {
    computerScore++;
  }

  if (playerScore == 5) {
		resultContainer.textContent = 'You win!';
		resetScores();
  } else if (computerScore == 5) {
		resultContainer.textContent = 'Computers wins. Better luck next time!';
		resetScores();
  }
}
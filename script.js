let playerLives = 5;
let computerLives = 5;

const buttons = document.querySelectorAll(".btn");
const resultContainer = document.querySelector(".round-result-text");
const playerChoiceImage = document.querySelector(".player");
const computerChoiceImage = document.querySelector(".computer");
const playerLivesDiv = document.querySelector(".player-lives");
const computerLivesDiv = document.querySelector(".computer-lives");

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    computerChoice = getComputerChoice();
    result = play(getPlayerChoice(event), computerChoice);
    updateChoiceImages(event.target.id, 'player');
    updateChoiceImages(computerChoice.toLowerCase(), 'computer');
    resultContainer.textContent = result;
    checkForWinner(result);
  });
});

function updateChoiceImages(id, player) {
  let img;
  if (id == "rock") {
    img = "./img/rock.png";
  } else if (id == "paper") {
    img = "./img/paper.png";
  } else {
    img = "./img/scissors.png";
  }

  if(player == "player"){
    playerChoiceImage.src = img;
  }
  else{
    computerChoiceImage.src = img;
  }
}

function updateLivesCount(){
  playerLivesDiv.textContent = playerLives.toString();
  computerLivesDiv.textContent = computerLives.toString();
}

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
  let loseString = `Grim Reapers' ${computerSelection} beats your ${playerSelection}`;
  let winString = `Your ${playerSelection} beats the Grim Reapers ${computerSelection}`;
  let drawString = `Draw. Everyone lives another turn...`;

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

function resetScores() {
  playerLives = 5;
  computerLives = 5;
}

function checkForWinner(result) {
  if (result.startsWith("Your")) {
    computerLives--;
  } else if (result.startsWith("Grim")) {
    playerLives--;
  }

  if (computerLives == 0) {
    resultContainer.textContent =
      "You've defeated the Grim Reaper and live to see another day";
    resetScores();
  } else if (playerLives == 0) {
    resultContainer.textContent = "You've been defeated by the Grim Reaper";
    resetScores();
  }
  updateLivesCount();
}

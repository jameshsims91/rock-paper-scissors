let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissorss"];

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("round-results-msg");
const winnerMsg = document.getElementById("winner-msg");

document
  .getElementById("rock")
  .addEventListener("click", () => playGame("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => playGame("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playGame("scissors"));

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playerWinRound(player, computer) {
  return (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  );
}

function playGame(playerSelection) {
  winnerMsg.innerText = "";

  const computerSelection = getComputerChoice();
  let roundResult = "";

  if (playerWinRound(playerSelection, computerSelection)) {
    playerScore++;
    roundResult = `You won! ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection === computerSelection) {
    roundResult = `It's a tie! You both chose ${playerSelection}.`;
  } else {
    computerScore++;
    roundResult = `You lost! ${computerSelection} beats ${playerSelection}.`;
  }

  roundResultsMsg.innerText = roundResult;
  playerScoreSpan.innerText = playerScore;
  computerScoreSpan.innerText = computerScore;

  if (playerScore === 5) {
    winnderMsg.innerText = "You win the game!";
    disableButtons();
  } else if (computerScore === 5) {
    winnerMsg.innerText = "The computer wins the game!";
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

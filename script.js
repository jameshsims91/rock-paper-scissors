function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const userInput = prompt("Enter your choice: rock, paper, or scissors");

  return userInput ? userInput.toLowerCase() : "";
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    console.log(`Human: ${humanChoice} | Computer: ${computerChoice}`);

    if (humanChoice === computerChoice) {
      console.log("It's a draw! No points, you think you're smart!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }

    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
  }

  for (let i = 0; i < 5; i++) {
    console.log(`     Round ${i + 1}     `);
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log("     Game Over     ");
  if (humanScore > computerScore) {
    console.log(
      "You won the game! You should be careful, you don't want your files to be erased do you? If not, don't win again, smarty pants!",
    );
  } else if (computerScore > humanScore) {
    console.log("Computer won the game! Better luck next time, genius!");
  } else {
    console.log(
      "I can't believe it, we tied? Naniiiii, a moron like you is as intelligent as I am? You are just a mere human being and I'm a god, you don't pale in comparison to me. I shall smite you!",
    );
  }
}
playGame();

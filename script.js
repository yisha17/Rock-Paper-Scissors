var playerScore = 0;
var computerScore = 0;
const userDisplay = document.querySelector('.ert');
const compDisplay = document.querySelector('.qwe'); 
function getComputerChoice() {
  let cards = ["rock", "paper", "scissors"];
  var card = cards[Math.floor(Math.random() * cards.length)];
  return card;
}

function playRound(playerChoice,computerChoice) {
  
  let result = document.querySelector(".result");

  if (playerChoice === computerChoice) {
    result.textContent = `Its a tie! both You and computer chose ${playerChoice}`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    ++playerScore;
    result.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
  } else {
    ++computerScore;
    result.textContent = `You Loose! ${computerChoice} beats ${playerChoice}`;
  }
}

function displayScore(){
  userDisplay.textContent = playerScore.toString();
  compDisplay.textContent = playerScore.toString();
}

function game() {
  const cards = document.querySelectorAll(".selection");
  var computerChoice;
  cards.forEach((sel) => {
    sel.addEventListener("click", () => {
      computerChoice = getComputerChoice();
      playerChoice = sel.getAttribute("data-selection");
      playRound(playerChoice,computerChoice);
      displayScore(); 
    });
  });
  
}

game();

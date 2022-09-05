var playerScore = 0;
var computerScore = 0;
const userDisplay = document.querySelector(".ert");
const compDisplay = document.querySelector(".qwe");
const result = document.querySelector(".result");
const cards = document.querySelectorAll(".selection");

function getComputerChoice() {
  let cards = ["rock", "paper", "scissors"];
  var card = cards[Math.floor(Math.random() * cards.length)];
  return card;
}

function playRound(playerChoice, computerChoice) {
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

function declareWinner() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      result.textContent = "You win! Congrats!!!";
      var button = document.createElement("button");
      button.textContent = "Play Again";
    } else {
      result.textContent = "You loose! Stupid!!!";
      var button = document.createElement("button");
      button.textContent = "Try Again!";
    }

    button.setAttribute('id',"play-again");
    result.appendChild(button);
    cards.forEach((card) => (card.disabled = true));
  }
}

document.addEventListener('click',resetGame);

function resetGame(e) {
  if (e.target.id === 'play-again'){
    location.reload();
  }
}

function displayScore() {
  userDisplay.textContent = playerScore.toString();
  compDisplay.textContent = computerScore.toString();
}

function game() {
  var computerChoice;
  cards.forEach((sel) => {
    sel.addEventListener("click", () => {
      computerChoice = getComputerChoice();
      playerChoice = sel.getAttribute("data-selection");
      playRound(playerChoice, computerChoice);
      displayScore();
      declareWinner();
    });
  });
}

game();

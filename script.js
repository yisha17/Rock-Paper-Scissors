function getComputerChoice() {
  let cards = ["rock", "paper", "scissor"];
  var card = cards[Math.floor(Math.random() * cards.length)];
  return card;
}

const playerChoice = document.querySelectorAll(".selection");
playerChoice.forEach((sel) => {
  sel.addEventListener("click", () => {
    return sel.getAttribute("data-selection");
  });
});

function playRound(playerSelection, computerSelection) {}

function playerSelection() {}

function game() {}

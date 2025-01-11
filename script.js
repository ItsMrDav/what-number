'use strict';
// Variable Declarations
let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = 0;

// Function Declarations
const displayMessage = message => {
  document.querySelector(`.message`).textContent = message;
};
const displayScore = score => {
  document.querySelector(`.score`).textContent = score;
};

// Check button functionality
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // When no input
  if (!guess) {
    displayMessage(`🚫 No number!`);

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct number!`);
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    document.querySelector(`body`).style.backgroundColor = `#69b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈Too high!` : `📉Too low!`);
      score--;
      displayScore(score);
    } else {
      displayMessage(`💥 You lose the game!`);
      displayScore(0);
    }
  }
});

// Again Button Functionality
document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.ceil(Math.random() * 20);
  score = 20;
  displayMessage(`Start guessing...`);
  displayScore(score);
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});

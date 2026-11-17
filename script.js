'use strict';

// Pick a secret number between 1 and 100.
let secretNumber = createSecretNumber();
let attempts = 0;
let gameOver = false;

const form = document.getElementById('guess-form');
const input = document.getElementById('guess-input');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const guessButton = document.getElementById('guess-button');
const restartButton = document.getElementById('restart-button');

function createSecretNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function showFeedback(message, state = '') {
  feedback.textContent = message;
  feedback.className = `feedback ${state}`.trim();
}

function handleGuess(event) {
  event.preventDefault();

  if (gameOver) return;

  const guess = Number(input.value);

  if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
    showFeedback('Please enter a whole number between 1 and 100.');
    input.focus();
    return;
  }

  attempts += 1;
  attemptsDisplay.textContent = attempts;

  if (guess < secretNumber) {
    showFeedback('Too low! Try a bigger number. ↗', 'low');
  } else if (guess > secretNumber) {
    showFeedback('Too high! Try a smaller number. ↘', 'high');
  } else {
    showFeedback(`You got it! The number was ${secretNumber}. Well played! 🎉`, 'won');
    gameOver = true;
    guessButton.disabled = true;
    input.disabled = true;
  }

  if (!gameOver) {
    input.value = '';
    input.focus();
  }
}

function startNewGame() {
  secretNumber = createSecretNumber();
  attempts = 0;
  gameOver = false;
  attemptsDisplay.textContent = '0';
  input.value = '';
  input.disabled = false;
  guessButton.disabled = false;
  showFeedback("New number, fresh start. What's your first guess?");
  input.focus();
}

form.addEventListener('submit', handleGuess);
restartButton.addEventListener('click', startNewGame);

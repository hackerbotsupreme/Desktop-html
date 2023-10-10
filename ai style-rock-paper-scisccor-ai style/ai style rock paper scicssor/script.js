// Get user choice elements
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// Get choice display elements
const userChoiceDisplay = document.getElementById('userChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultDisplay = document.getElementById('result');

// Choices array
const choices = ['rock', 'paper', 'scissors'];

// Computer choice function
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Result calculation function
function calculateResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

// Event listeners
rockButton.addEventListener('click', () => {
  const userChoice = 'rock';
  const computerChoice = getComputerChoice();
  const result = calculateResult(userChoice, computerChoice);

  userChoiceDisplay.textContent = userChoice;
  computerChoiceDisplay.textContent = computerChoice;
  resultDisplay.textContent = result;
});

paperButton.addEventListener('click', () => {
  const userChoice = 'paper';
  const computerChoice = getComputerChoice();
  const result = calculateResult(userChoice, computerChoice);

  userChoiceDisplay.textContent = userChoice;
  computerChoiceDisplay.textContent = computerChoice;
  resultDisplay.textContent = result;
});

scissorsButton.addEventListener('click', () => {
  const userChoice = 'scissors';
  const computerChoice = getComputerChoice();
  const result = calculateResult(userChoice, computerChoice);

  userChoiceDisplay.textContent = userChoice;
  computerChoiceDisplay.textContent = computerChoice;
  resultDisplay.textContent = result;
});

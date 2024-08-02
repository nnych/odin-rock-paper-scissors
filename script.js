function getComputerChoice() {
  //return a random rock paper scissors choice
  const rand = Math.random();

  if (rand < 0.333){
    return 'rock';
  } else if (rand < 0.666){
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  //collect human input for rock paper scissors choice
  let choice = null;
  choice = prompt(`Rock, Paper, or Scissors?`).toLowerCase();

  while (!((choice == 'rock')
    || (choice == 'paper')
    || (choice == 'scissors')
    || (choice == null))) {
      alert('Not a valid selection.')
      choice = prompt(`Rock, Paper, or Scissors?`).toLowerCase();
    }

  return choice;
}

function playRound (humanChoice, compChoice) {
  console.log('Human choice:', humanChoice);
  console.log('Computer choice:', compChoice);

  if (humanChoice === 'rock') {
    switch (compChoice) {
    case "paper":
      computerScore++;
      return console.log('Computer wins! Paper beats Rock.');
    case "scissors":
      humanScore++;
      return console.log('You win! Scissors beats Rock.');
    default:
      return console.log('Tie round. No contest!');
  }}

  if (humanChoice === 'paper') {
    switch (compChoice) {
    case "scissors":
      computerScore++;
      return console.log('Computer wins! Scissors beats Paper.');
    case "rock":
      humanScore++;
      return console.log('You win! Paper beats Rock.');
    default:
      return console.log('Tie round. No contest!');
  }}

  if (humanChoice === 'scissors') {
    switch (compChoice) {
    case "rock":
      computerScore++;
      return console.log('Computer wins! Rock beats Scissors.');
    case "paper":
      humanScore++;
      return console.log('You win! Scissors beats Paper.');
    default:
      return console.log('Tie round. No contest!');
  }}
}

function playGame() {
  let humanChoice = null;
  let compChoice = null;

  console.log(`Rock, Paper, Scissors. Let's begin!`);
  console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

  for (let i = 1; i <= 5; i++) {
    console.log(`Round: ${i}`)
    humanChoice = getHumanChoice();
    compChoice = getComputerChoice();
    playRound(humanChoice, compChoice);
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
  }

  if (humanScore > computerScore)
    console.log('You win the game!');
  else if (computerScore > humanScore)
    console.log('Nice try. The computer wins this game');
  else
    console.log('Tie game!');
}

//main
let humanScore = 0;
let computerScore = 0;
playGame();
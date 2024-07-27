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
  let choice = prompt(`Rock, Paper, or Scissors?`);
  return console.log(choice);
}

console.log(`Rock, Paper, Scissors. Let's begin!`);
getHumanChoice();
console.log('Computer choice:', getComputerChoice());
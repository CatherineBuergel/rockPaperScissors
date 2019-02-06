console.log('hooked up')

let rsp = {
  0: 'Rock',
  1: 'Paper',
  2: 'Scissors'
}

function randomNumber() {
  return Math.floor(Math.random() * 3);
}

function whoWins(user) {
  let userChoice = rsp[user];
  let compNumber = randomNumber();
  let compChoice = rsp[compNumber];
  if (userChoice == compChoice) {
    window.alert('You Tied!');
  } else if (userChoice == 'Rock') {
    if (compChoice == 'Paper') {
      window.alert('You Lose! The Computer chose Paper');
    } else {
      window.alert('You Win! The Computer chose Scissors!');
    };
  } else if (userChoice == 'Scissors') {
    if (compChoice == 'Rock') {
      window.alert('You Lose! The Computer chose Rock');
    } else {
      window.alert('You Win! The Computer chose Paper!');
    };
  } else if (userChoice == 'Paper') {
    if (compChoice == 'Scissors') {
      window.alert('You Lose! The Computer chose Scissors');
    } else {
      window.alert('You Win! The Computer chose Rock!');
    };
  };
}
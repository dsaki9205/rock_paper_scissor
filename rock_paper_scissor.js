//creating user input  for rock paper scissor using the arrow function
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
  } else {
      console.log('Error')
  }
};
//creating computer input
const getComputerChoice = () => {
  //using math.floor and math.random to get whole number between 0 and two
  const randomNumber = Math.floor(Math.random() * 3);
  //using switch method to get computer input
  switch(randomNumber){
      case 0:
          return 'rock';
      case 1:
          return 'paper';
      case 2:
          return 'scissors';
  }
};
//determining the winner
const determineWinner = (userChoice, computerChoice) => {
  //extra function
  if (userChoice === 'bomb'){
    return 'The user win'
  }
  //creating function for tied game
   if (userChoice === computerChoice){
     return 'The game is a tie';
   }
   //Creating condition for each of the turn
   if (userChoice === 'rock'){
     if(computerChoice === 'paper'){
       return 'The computer has won'
     }
   } else{
     return 'You have won'
   }
   if (userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The computer has won'
    }
  } else{
    return 'You have won'
  }
  if (userChoice === 'paper'){
    if(computerChoice === 'scissor'){
      return 'The computer has won'
    }
  } else{
    return 'You have won'
  }
};
//creating function to see if the user or the computer won
const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log ('You threw: ' + userChoice);
  console.log('The computer threw ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();

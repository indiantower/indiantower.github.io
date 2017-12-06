alert('Testing Site Script');
function getWinner() {
  let userOne = prompt('What is your move? User One?').toLowerCase();
  let userTwo = prompt('What is your move? User Two?').toLowerCase();
   if (userOne === 'rock' && userTwo === 'paper') {
     document.write('User Two Wins!');
   }
   else if (userOne === "scissors" && userTwo === 'rock') {
     document.write('User Two Wins!');
   }
   else if (userOne === 'paper' && userTwo === "scissors") {
     document.write('User Two Wins!');
   }
   if (userOne === 'rock' && userTwo === 'scissors') {
     document.write('User One Wins!');
   }
   else if (userOne === "scissors" && userTwo === 'paper') {
     document.write('User One Wins!');
   }
   else if (userOne === 'paper' && userTwo === "rock") {
     document.write('User One Wins!');
   }
   else if (userOne === 'rock' && userTwo === 'rock' || userOne === 'paper' && userTwo === 'paper' || userOne === 'scissors' && userTwo === 'scissors') {
     document.write('Tie!');
   }
   return 0;
}

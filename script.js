let userWins = false;
let computerWins = false;
let draw = false;

let userMoveString = '';
let computerMoveString = '';


function makeMove(){
    // Prompt user for move and store that input
    let userMove = prompt('Pick your move between Rock, Paper, and Scissors');
    userMove = userMove.toLowerCase();
    // Check input is rock, paper, or scissors, and restart if not
    if((userMove != 'rock') && (userMove != 'paper') && (userMove != 'scissors')){
        alert('You did not type in Rock, Paper, or Scissors, please try again!')
        makeMove()
    }
    // Get computer to make random move
    let computerNumber = (Math.floor(Math.random()*3));
    // Store computer move
    let computerMove = '';
    if (computerNumber == 0){
        computerMove = 'rock';
    }
    else if (computerNumber == 1){
        computerMove = 'paper';
    }
    else{
        computerMove = 'scissors';
    }
    userMoveString = userMove
    computerMoveString = computerMove
}


function getScore(userMove, computerMove){
    if (
        (userMove=="rock" && computerMove=="scissors") ||
        (userMove=="scissors" && computerMove=="paper") ||
        (userMove=="paper" && computerMove=="rock") 
    ) {
        userWins = true;
    }
    else if (
        (userMove=="rock" && computerMove=="paper") ||
        (userMove=="scissors" && computerMove=="rock") ||
        (userMove=="paper" && computerMove=="scissors") 
    ) {
        computerWins = true;
    }
    else {
        draw = true;
    }
}

function concludeGame() {

    if (userWins) 
    {
        alert (`You won! You picked ${userMoveString} and the computer picked ${computerMoveString}.`);
    } 
    else if (computerWins) {
        alert(`You lost! You picked ${userMoveString} and the computer picked ${computerMoveString}.`);
    } 
    else {
        alert (`It's a draw! You picked ${userMoveString} and the computer picked ${computerMoveString}.`);
    }

   let playAgain =  confirm("Would you like to play again?"); 
   if (playAgain) {
    
   }
}

makeMove()
getScore(userMoveString, computerMoveString)
concludeGame()
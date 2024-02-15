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
}

makeMove();

let userWins = false;
let computerWins = false;
let draw = false;


function getScore(playerMove, computerMove){
    if (
        (userMove=="rock" && computerMove=="scissors") ||
        (userMove=="scissors" && computerMove=="paper") ||
        (userMove=="paper" && computerMove=="rock") 
    ) {
        console.log("user wins");
        userWins = true;
    }
    else if (
        (userMove=="rock" && computerMove=="paper") ||
        (userMove=="scissors" && computerMove=="rock") ||
        (userMove=="paper" && computerMove=="scissors") 
    ) {
        console.log("computer wins");
        computerWins = true;
    }
    else (
        (userMove=="rock" && computerMove=="rock") ||
        (userMove=="scissors" && computerMove=="scissors") ||
        (userMove=="paper" && computerMove=="paper") 
    ) {
        console.log("its a draw");
        draw = true;
    }
}

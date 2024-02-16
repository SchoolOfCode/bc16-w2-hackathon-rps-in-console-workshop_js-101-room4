let userWins = false;
let computerWins = false;
let draw = false;

let userMoveString = '';
let computerMoveString = '';

let gameNumber = 0;
let winNumber = 0;
let lostNumber = 0;
let drawNumber = 0;


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

    gameNumber ++ 

    if (userWins) 
    {
        winNumber ++
        alert (`You won! You picked ${userMoveString} and the computer picked ${computerMoveString}.`);
    } 
    else if (computerWins) {
        lostNumber ++
        alert(`You lost! You picked ${userMoveString} and the computer picked ${computerMoveString}.`);
    } 
    else {
        drawNumber ++
        alert (`It's a draw! You picked ${userMoveString} and the computer picked ${computerMoveString}.`);
    }

   let playAgain =  confirm(`You have played ${gameNumber} games, you have won ${winNumber}, lost ${lostNumber} and drawn ${drawNumber}. 
                            Would you like to play again?`); 
   if (playAgain) {
        playGame()
   }
   else{
        alert('Thank you for playing')
   }
}


function playGame(){
    userWins = false;
    computerWins = false;
    draw = false;

    userMoveString = '';
    computerMoveString = '';

    makeMove()
    getScore(userMoveString, computerMoveString)
    concludeGame()

}

playGame()
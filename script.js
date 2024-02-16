let userWins = false;
let computerWins = false;
let draw = false;

let userMoveString = '';
let computerMoveString = '';

let gameNumber = 0;
let winNumber = 0;
let lostNumber = 0;
let drawNumber = 0;

let userNameString = '';

function askName(){
    // Ask user for their name and store that input
    let userName = prompt("Hi, let's play rock, paper, scissors! What is your name?");
    userNameString = userName
}

function makeMove(){
    // Prompt user for move and store that input
    let userMove = prompt(`Hi ${userNameString}! Pick your move between Rock, Paper, and Scissors`);
    userMove = userMove.toLowerCase();
    // Check input is rock, paper, or scissors, and restart if not
    if((userMove != 'rock') && (userMove != 'paper') && (userMove != 'scissors')){
        alert('You did not type in Rock, Paper, or Scissors, please try again!')
        makeMove()
    }
  
    // Get computer to make move based on user move
    let computerMove = '';
    if (userMove == 'rock'){
        computerMove = 'paper';
    }
    else if (userMove == 'paper'){
        computerMove = 'scissors';
    }
    else{
        computerMove = 'rock';
    }
    // Update variables so that other functions can call them
    userMoveString = userMove
    computerMoveString = computerMove
}


function getScore(userMove, computerMove){
    // Check the relationship between userMove and computerMove and update the result variables accordingly 
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
    // add one to game number

    gameNumber ++ 

    // check result variables and update game counters and alert the user accordingly

    if (userWins) 
    {
        winNumber ++
        alert (`Well done ${userNameString}, you won! You picked ${userMoveString} and the computer picked ${computerMoveString}.`);
    } 
    else if (computerWins) {
        lostNumber ++
        alert(`Unlucky ${userNameString}, you lost! You picked ${userMoveString} and the computer picked ${computerMoveString}.`);
    } 
    else {
        drawNumber ++
        alert (`Close one ${userNameString}, it's a draw! You picked ${userMoveString} and the computer picked ${computerMoveString}.`);
    }

    // alert user of the scores and ask if they want to play again

   let playAgain =  confirm(`${userNameString}, you have played ${gameNumber} game(s), you have won ${winNumber}, lost ${lostNumber}, and drawn ${drawNumber}. 
                            Would you like to play again?`); 

    // if they want to play again, execute the game function again, if not thank them and the function ends
   if (playAgain) {
        playGame()
   }
   else{
        alert(`Thank you for playing ${userNameString}!`)
   }
}

// links all game functions under one function to allow the game to loop, all variables apart from score tracker are reset to zero

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

askName()
playGame()
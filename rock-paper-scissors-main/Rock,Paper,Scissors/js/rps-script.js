// Declaration of most variables
let userChoice; // user variable
let computer; // computer variable
let gamesWon = 0; // how many games won
let gamesLost = 0; // how many games lost
let gamesTied = 0; // how many games tied

console.log("Please make sure that your browswer window is active to start!") //Message to make sure that the browser window is active

setTimeout(() => {console.log("To begin playing please choose r, p, or s with the keyboard!"); }, 1000); // Second message to begin play

document.addEventListener("keyup", function(event) { //  Defines the user's variable when key is pressed
   if(event.keyCode === 82) {
      userChoice = "rock";
      // Define user's variable here = "rock";
      console.log('you chose rock!')
   } else if(event.keyCode === 80) {
      userChoice = "paper";
      // Define user's variable here = "paper";
      console.log('you chose paper!')
   } else if(event.keyCode === 83) {
      userChoice = "scissors";
      // Define user's variable here = "scissors";
      console.log('you chose scissors!')
   } else {
      // Define user's variable here = Choose a valid key & Please press r, p, or s with the keyboard;
      console.log('you chose an invalid key!')
      return console.log('please choose r, p, or s with the keyboard!')
   }
   setTimeout(() => {cpuChoice(); }, 1000); // invokes the cpu function so the computer makes a choice

function cpuChoice(){ // cpuChoice Function
   cpuChoice = Math.round(Math.random()*2); // function chooses a random number then rounds it up or down and multiplies it by 2
   if (cpuChoice == 1 ){
      // defines computer choice as scissors
      computer = "scissors";
      console.log("The computer chose scissors!")
   } else if (cpuChoice == 2){
      // defines computer choice as paper
      computer = "paper";
      console.log("The computer chose paper!")
   } else { // defines computer choice as rock
      computer = "rock";
      console.log("The computer chose rock!");
   }   
   setTimeout(() => {compare(userChoice, computer); }, 1000);// invokes the compare function

function compare(userChoice, computer){ // Compare Function
   if (userChoice === computer){
      // compares choices to determine a tie game
      gamesTied++;
      console.log("Tie Game");
   } else if (userChoice == 'rock' && computer == 'scissors' || userChoice == 'scissors' && computer == 'paper' || userChoice == 'paper' && computer == 'rock'){
      // compares choices to determine that the user wins the game
      console.log("You Win");
      gamesWon++;
   } else { // compares choices to determine that the user looses the game
      console.log("Computer Wins");
      gamesLost++;
   }

   let results = `Since your last refresh you have Tied ${gamesTied} Games, Won ${gamesWon} Games, & Lost ${gamesLost} Games`; // figures and displays results since last refresh.
setTimeout(() => {console.log(results); }, 1000); // logs results to console
setTimeout(() => {console.log("If you would like to play again press the r, p, or s key."); }, 2000), // logs play again message
setTimeout(() => {console.log("If you wish to reset the Games counter please refresh the page."); }, 3000); // logs refresh message
}}})
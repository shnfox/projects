let userChoice; // user variable
let computer; // computer variable
let $scoreText = $('#score'); // score display
let $choice = $('.choices') //choice variable
let $playAgain = $('#play-again') //play again variable
let $reset = $('#reset-score') // reset score variable
let score = 0; // set score to 0 variable

$choice.on('click', function (e) { // userChoice function
   userChoice = e.target.id;
   $('.pentagon').css('background-image', 'none'); // hides backgroud image
   $('.choices').addClass('hidden'); // adds hidden class to all choices
   setTimeout(() => { $('#play-again, #reset-score, #result').removeClass('hidden') }, 3000); // timeout for play again, reset and results to display
   $('.user-image-holder').removeClass('hidden'); // removes hidden class to display user choice span
   $('.computer-image-holder').removeClass('hidden'); // removes hidden class to display computer choice span ***DELETE LINE 15 TO HIDE THE COMPUTER CHOICE UNTIL THE COMPUTER ACTUALLY MAKES A CHOICE.Á
   switch (userChoice) { // switch statement for user choice
      case 'rock':
         $('.user-image-holder').css('background-image', 'url(images/icon-rock.svg)');
         break;
      case 'paper':
         $('.user-image-holder').css('background-image', 'url(images/icon-paper.svg)');
         break;
      case 'scissors':
         $('.user-image-holder').css('background-image', 'url(images/icon-scissors.svg)');
         break;
      case 'lizard':
         $('.user-image-holder').css('background-image', 'url(images/icon-lizard.svg)');
         break;
      case 'spock':
         $('.user-image-holder').css('background-image', 'url(images/icon-spock.svg)');
         break;
   }

   setTimeout(() => { cpuChoice(); }, 3000); // timeout for computer choice to display


   function cpuChoice() { // cpuChoice Function
      cpuChoice = Math.round(Math.random() * 4); // function chooses a random number then rounds it up or down and multiplies it by 4
      if (cpuChoice == 1) { // defines computer choice as scissors
         computer = "scissors";
         $('.computer-image-holder').removeClass('hidden');
         $('.computer-image-holder').css('background-image', 'url(images/icon-scissors.svg)');
         console.log("The computer chose scissors!")
      } else if (cpuChoice == 2) { // defines computer choice as paper
         computer = "paper";
         $('.computer-image-holder').removeClass('hidden');
         $('.computer-image-holder').css('background-image', 'url(images/icon-paper.svg)');
         console.log("The computer chose paper!")
      } else if (cpuChoice == 3) { // defines computer choice as lizard
         computer = "lizard";
         $('.computer-image-holder').removeClass('hidden');
         $('.computer-image-holder').css('background-image', 'url(images/icon-lizard.svg)');
         console.log("The computer chose lizard!")
      } else if (cpuChoice == 4) { // defines computer choice as spock
         computer = "spock";
         $('.computer-image-holder').removeClass('hidden');
         $('.computer-image-holder').css('background-image', 'url(images/icon-spock.svg)');
         console.log("The computer chose spock!")
      } else { // defines computer choice as rock
         computer = "rock";
         $('.computer-image-holder').removeClass('hidden');
         $('.computer-image-holder').css('background-image', 'url(images/icon-rock.svg)');
         console.log("The computer chose rock!");
      }
      compare(userChoice, computer)


      function compare(userChoice, computer) { // Compare Function
         if (userChoice === computer) {// compares choices to determine a tie game
            $('#result').removeClass('hidden').text('You Tied!')
         } else if (userChoice == 'rock' && computer == 'scissors' || userChoice == 'scissors' && computer == 'paper' || userChoice == 'paper' && computer == 'rock' || userChoice == 'rock' && computer == 'lizard' || userChoice == 'lizard' && computer == 'spock' || userChoice == 'spock' && computer == 'scissors' || userChoice == 'scissors' && computer == 'lizard' || userChoice == 'paper' && computer == 'spock' || userChoice == 'lizard' && computer == 'paper' || userChoice == 'spock' && computer == 'rock') { // compares choices to determine that the user wins the game
            $('#result').removeClass('hidden').text("You Won");
            score++;
            $scoreText.text(score);
         } else { // compares choices to determine that the user looses the game
            $('#result').removeClass('hidden').text("You Lost");
            score--;
            $scoreText.text(score);
         }
      }
   }
});

$playAgain.on('click', function () { // play again function
   $('.pentagon').css('background-image', 'url(images/bg-pentagon.svg)'); // add back pentagon background image
   $('.choices').removeClass('hidden'); //removes hidden class to display choices again
   $('#play-again, #reset-score, #result').addClass('hidden'); //adds hidden class to hide buttons and results
   $('.user-image-holder').addClass('hidden'); //adds hidden class to hide user choice span
   $('.computer-image-holder').addClass('hidden'); // adds hidden class to computer image span
})
$reset.on('click', function () { // reset button function
   score = 0; // resets score to 0
   $scoreText.text(score); //tells score to reset to 0
   $('.pentagon').css('background-image', 'url(images/bg-pentagon.svg)'); // add back pentagon background image
   $('.choices').removeClass('hidden'); //removes hidden class to display choices again
   $('#play-again, #reset-score, #result').addClass('hidden'); //adds hidden class to hide buttons and results
   $('.user-image-holder').addClass('hidden'); //adds hidden class to hide user choice span
   $('.computer-image-holder').addClass('hidden'); //adds hidden class to computer image span
})

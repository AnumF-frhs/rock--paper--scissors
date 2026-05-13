// modal
//alert('Do you think you could beat the opponent? Try it out! ');
//modal code from GC
/*
document.addEventListener('DOMContentLoaded', function () {
            var instructionsModal = new bootstrap.Modal(document.getElementById('gameRules'));
            instructionsModal.show();
});
*/



//5/12 starting JS from GC, some code is from the Formative!
let playerScore = 0;
let computerScore = 0;

var rockBtn = document.getElementById("rockInput");
var scissorsBtn = document.getElementById("scissorsInput");
var paperBtn = document.getElementById("paperInput");
var resetBtn = document.getElementById("resetBtn");

const choices = ["Rock", "Paper", "Scissors"];

//#4
function getComputerChoice () {
let index= Math.floor(Math.random() * choices.length);
return choices[index];
}

//#5
function playRound (playerChoice) {
console.log("Playing Round" + playerChoice);
}

//#6
rockBtn.addEventListener("click", function () {
    
    playRound("rock"); 

});


//#7

paperBtn.addEventListener( "click", function () {

playRound("paper");

});

//#8

scissorsBtn.addEventListener( "click", function () {

playRound("scissors");

});

//paperBtn.addEventListener( 'click', playRound);

//#9
function determineWinner (playerChoice, computerChoice) {

       var playerC = choices[playerChoice];
       var computerC = choices[computerChoice] ;

       

       if (playerChoice === computerChoice) {
             return "Tie";
       }

       if (playerC === "Rock") {
         if (computerC === "Paper") { return "Computer"; }
               else { return "Player"; }
       }

       if (playerC === "Paper") {
             if (computerC === "Scissors") { return "Computer"; }
             else { return "Player";}
      }



      if (playerC === "Scissors") {
           if (computerC === "Rock") { return "Computer" }
           else { return "Player"; }
     }
}



// reset button layout, not final
 //btnReset.addEventListener('click', resetGame)
// function resetGame () {
//     numOfLives = 3;
//     playerScore = 0;
//     lives.textContent = numOfLives;
//     score.textContent= playerScore;
//     statusDisplay.textContent = "Playing"
// }
 console.log(getComputerChoice);
 console.log(playRound);
 console.log(choices);
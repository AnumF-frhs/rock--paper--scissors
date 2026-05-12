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

rockBtn.addEventListener( 'click', playRound);

//#7

scissorsBtn.addEventListener( 'click', playRound);

//#8

paperBtn.addEventListener( 'click', playRound);

;


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
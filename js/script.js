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

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
let index= Math.floor(Math.random() * choices.length);
return choices[index];
}
 
 console.log(getComputerChoice);
 console.log(choices);
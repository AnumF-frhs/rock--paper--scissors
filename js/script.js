//5/12 starting JS from GC, some code is from the Formative!

//code from private comment:

let playerScore = 0;
let computerScore = 0;
let ties = 0; // optional

const choices = ["Rock", "Paper", "Scissors"];

document.querySelector("#rockInput").addEventListener("click", function () {
    playRound("Rock");
});

document.querySelector("#paperInput").addEventListener("click", function () {
    playRound("Paper");
});

document.querySelector("#scissorsInput").addEventListener("click", function () {
    playRound("Scissors");
});

document.querySelector("#resetBtn").addEventListener("click", resetGame);


function playRound(playerChoice) {
    console.log("Playing Round " + playerChoice);
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    updateScore(result);
    displayResult(playerChoice, computerChoice, result);
}

function getComputerChoice() {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function determineWinner(player, computer) {

    if (player === computer) {
        return "tie";
    }

    if (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Paper" && computer === "Rock") ||
        (player === "Scissors" && computer === "Paper")
    ) {
        return "player";
    }

    return "computer";
}

function updateScore(result) {
    if (result === "player") {
        playerScore++;
    } else if (result === "computer") {
        computerScore++;
    } else {
        ties++;
    }
   
}

function displayResult(playerChoice, computerChoice, result) {
    let resultText = " ";    
    if (result === "player") {
        resultText = "You win!";
    }
    else if (result === "computer") {
        resultText = "Computer wins!";
    }
    else {
        resultText = "It's a tie!";
    }
        document.querySelector("#outcome").textContent = playerChoice + " vs " + computerChoice;
        document.querySelector("#result").textContent = resultText;
        document.querySelector("#playerScore").textContent = playerScore;
        document.querySelector("#computerScore").textContent = computerScore;
}


function resetGame() {
    playerScore = 0;
    computerScore = 0;
    ties = 0;
   
    document.querySelector("#playerScore").textContent = playerScore;
    document.querySelector("#computerScore").textContent = computerScore;
    document.querySelector("#outcome").textContent = " ";
    document.querySelector("#result").textContent = " ";
}

// var mScore = document.getElementById("scoreDisplay");
// var cScore = document.getElementById("oppDisplay");


// var rockBtn = document.getElementById("rockInput");
// var scissorsBtn = document.getElementById("scissorsInput");
// var paperBtn = document.getElementById("paperInput");
// var resetBtn = document.getElementById("resetBtn");

// const choices = ["rock", "paper", "scissors"];

// //#4
// function getComputerChoice () {
// let index= Math.floor(Math.random() * choices.length);
// return choices[index];
// }

// //#5
// function playRound (playerChoice) {

//     console.log("Playing Round:  " + playerChoice);
//     //#6
// rockBtn.addEventListener("click", function () {

//     playRound("rock"); 

// });


// //#7

// paperBtn.addEventListener( "click", function () {

// playRound("paper");


// });

// //#8

// scissorsBtn.addEventListener( "click", function () {

// playRound("scissors");

// });

// //paperBtn.addEventListener( 'click', playRound);

// //#9
// function determineWinner (playerChoice, computerChoice) {

//        var playerC = choices[playerChoice];
//        var computerC = choices[computerChoice] ;

       

//        if (playerChoice === computerChoice) {
//              return "Tie";
//        }

//        if (playerC === "Rock") {
//          if (computerC === "Paper") {
//              return "Computer";
//              }   else { 
//                 return "Player"; 
//             }
//        }

//        if (playerC === "Paper") {
//              if (computerC === "Scissors")
//                  { return "Computer"; 

//                  } else { 
//                     return "Player";
//                 }
//       }



//       if (playerC === "Scissors") {
//            if (computerC === "Rock") 
//             { return "Computer" }
//            else { 
//             return "Player";
//          }
//      }
// }

// //#10
// function updateScore (roundResult) {

//     if (roundResult === "Player") { 
//         playerScore += 1; 
//     }

//     else if (roundResult === "Computer") { 
//          computerScore += 1; 
//         }

//    else (roundResult === "Tie") 
//    { 
    
//     console.log("Round ended in a Tie. No score updates"); 
// }
// }

// //#11

// function updateDisplay () {
//     mScore.textContent = playerScore;
//     cScore.textContent = computerScore;
// }

// //#12
//  resetBtn.addEventListener('click', reset)

// function reset () {
//    playerScore = 0;
//    computerScore = 0;
//   mScore.textContent = playerScore;
//   cScore.textContent= computerScore;
// }

// querySelector.addEventListener

// }

// rockBtn.addEventListener("click", function () {
    
//     playRound("rock"); 

// });


// 
// paperBtn.addEventListener( "click", function () {

// playRound("paper");

// });

// scissorsBtn.addEventListener( "click", function () {

// playRound("scissors");

// });

// //paperBtn.addEventListener( 'click', playRound);


// function determineWinner (playerChoice, computerChoice) {

//        var playerC = choices[playerChoice];
//        var computerC = choices[computerChoice] ;

       

//        if (playerChoice === computerChoice) {
//              return "Tie";
//        }

//        if (playerC === "Rock") {
//          if (computerC === "Paper") {
//              return "Computer";
//              }   else { 
//                 return "Player"; 
//             }
//        }

//        if (playerC === "Paper") {
//              if (computerC === "Scissors")
//                  { return "Computer"; 

//                  } else { 
//                     return "Player";
//                 }
//       }



//       if (playerC === "Scissors") {
//            if (computerC === "Rock") 
//             { return "Computer" }
//            else { return "Player"; }
//      }
// }


// function updateScore (roundResult) {

//     if (roundResult === "Player") { 
//         playerScore += 1; 
//     }

//     else if (roundResult === "Computer") { 
//          computerScore += 1; 
//         }

//    else (roundResult === "Tie") 
//    { 
    
//     console.log("Round ended in a Tie. No score updates"); 
// }
// }



// function updateDisplay () {
//     mScore.textContent = playerScore;
//     cScore.textContent = computerScore;
// }


//  resetBtn.addEventListener('click', reset)

// function reset () {
//    playerScore = 0;
//    computerScore = 0;
//   mScore.textContent = playerScore;
//   cScore.textContent= computerScore;
// }




 console.log(getComputerChoice);
 console.log(playRound);
//  console.log(updateDisplay);
//  console.log(updateScore);
 console.log(choices);
//5/12 starting JS from GC, some code is from the Formative!
let playerScore = 0;
let computerScore = 0;

var mScore = document.getElementById("scoreDisplay");
var cScore = document.getElementById("oppDisplay");


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

    console.log("Playing Round:  " + playerChoice);
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
         if (computerC === "Paper") {
             return "Computer";
             }   else { 
                return "Player"; 
            }
       }

       if (playerC === "Paper") {
             if (computerC === "Scissors")
                 { return "Computer"; 

                 } else { 
                    return "Player";
                }
      }



      if (playerC === "Scissors") {
           if (computerC === "Rock") 
            { return "Computer" }
           else { 
            return "Player";
         }
     }
}

//#10
function updateScore (roundResult) {

    if (roundResult === "Player") { 
        playerScore += 1; 
    }

    else if (roundResult === "Computer") { 
         computerScore += 1; 
        }

   else (roundResult === "Tie") 
   { 
    
    console.log("Round ended in a Tie. No score updates"); 
}
}

//#11

function updateDisplay () {
    mScore.textContent = playerScore;
    cScore.textContent = computerScore;
}

//#12
 resetBtn.addEventListener('click', reset)

function reset () {
   playerScore = 0;
   computerScore = 0;
  mScore.textContent = playerScore;
  cScore.textContent= computerScore;
}



}

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
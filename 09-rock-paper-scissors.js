let score = 
(JSON.parse(localStorage.getItem('Score')));


if (!score){
  score = {
     wins:0,
 losses:0,
 ties:0
  }

}

updateScoreElement()




function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissors') {
  if (computerMove === 'rock') {
    result = 'You lose.';
  } else if (computerMove === 'paper') {
    result = 'You win.';
  } else if (computerMove === 'scissors') {
    result = 'Tie.';
  }

} else if (playerMove === 'paper') {
  if (computerMove === 'rock') {
    result = 'You win.';
  } else if (computerMove === 'paper') {
    result = 'Tie.';
  } else if (computerMove === 'scissors') {
    result = 'You lose.';
  }
  
} else if (playerMove === 'rock') {
  if (computerMove === 'rock') {
    result = 'Tie.';
  } else if (computerMove === 'paper') {
    result = 'You lose.';
  } else if (computerMove === 'scissors') {
    result = 'You win.';
  }
}


  if (result === 'You win.'){
    score.wins = score.wins + 1
    }else if (result=== 'You lose.'){
      score.losses = score.losses +1
    } else if (result === 'Tie.'){
      score.ties = score.ties + 1
    };

    localStorage.setItem('Score', JSON.stringify(score));


  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result

  document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer `


 console.log((`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
 wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`)) 
  }

function updateScoreElement(){
document.querySelector('.js-score')
  .innerHTML = 
`wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`

}

function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'scissors';
}
return computerMove;        
}
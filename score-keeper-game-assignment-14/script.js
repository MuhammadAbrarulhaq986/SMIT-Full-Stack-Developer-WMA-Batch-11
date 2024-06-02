var targetNum, p1Score, p2Score;
var target = document.getElementById("targetNum");
var scoreContainer = document.getElementById("scoreContainer");
var winnerContainer = document.getElementById("winnerContainer");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var scoreBoardP1 = document.getElementById("p1Score");
var scoreBoardP2 = document.getElementById("p2Score");

function start() {
  targetNum = +target.value;
  if (!targetNum && targetNum < 1) {
    alert("Please enter a positive number");
    return;
  }
  scoreContainer.style.display = "flex";
}

function addScore(player) {
  var winner = document.getElementById("winner");

  if (player === "player1") {
    p1Score = Number(scoreBoardP1.innerText);
    p1Score++;
    scoreBoardP1.innerText = p1Score;
    if (p1Score === targetNum) {
      btn1.setAttribute("disabled", "true");
      btn2.setAttribute("disabled", "true");
      winnerContainer.style.display = "block";
      winner.innerText = "Player 1 has won!";
    }
  } else {
    p2Score = Number(scoreBoardP2.innerText);
    p2Score++;
    scoreBoardP2.innerText = p2Score;
    if (p2Score === targetNum) {
      btn1.setAttribute("disabled", "true");
      btn2.setAttribute("disabled", "true");
      winnerContainer.style.display = "block";
      winner.innerText = "Player 2 has won!";
    }
  }
}

function reset() {
  target.value = 1;
  btn1.removeAttribute("disabled");
  btn2.removeAttribute("disabled");
  scoreContainer.style.display = "none";
  winnerContainer.style.display = "none";
  scoreBoardP1.innerText = "0";
  scoreBoardP2.innerText = "0";
}

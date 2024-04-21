// ******* To see the rest of the  programs ****************************************************************************************************
// ******* enter an Alphabet  ****************************************************************************************************
document.write("<h1>Question:1</h1>");
var numOne = prompt("Enter a positive integer:");
if (numOne === null || numOne === "" || isNaN(numOne) || numOne < 0) {
  document.write("<h1>Invalid input. Pleasse enter a positive integer.</h1>");
} else {
  numOne = parseInt(numOne);
  document.write("<h1>Number:" + numOne);
  document.write("<h1>Round off value:" + Math.round(numOne) + "</h1>");
  document.write("<h1>Floor value:" + Math.floor(numOne) + "</h1>");
  document.write("<h1>Cell value:" + Math.cell(numOne) + "</h1>");
}

// **************************************************************************************************************

// ******* To see the rest of the  programs ****************************************************************************************************
// ******* enter an Alphabet  ****************************************************************************************************
document.write("<h2>Question:2</h2>");
var numTwo = prompt("Enter a negative integer:");
if (numTwo === null || numTwo === "" || isNaN(numTwo) || numTwo > 0) {
  document.write("<h2>Invalid input. Pleasse enter a positive integer.</h2>");
} else {
  numTwo = parseInt(numTwo);
  document.write("<h2>Number:" + numTwo);
  document.write("<h2>Round off value:" + Math.round(numTwo) + "</h2>");
  document.write("<h2>Floor value:" + Math.floor(numTwo) + "</h2>");
  document.write("<h2>Cell value:" + Math.cell(numTwo) + "</h2>");
}

// **************************************************************************************************************

// ******* The absolute value of a number is its distance from zero, regardless of direction.****************************************************************************************************
// ******* regardless of direction In other words, ****************************************************************************************************
// ******* it is the magnitude of the number without regard to its sign.****************************************************************************************************

document.write("<h3>Question:3</h3>");
var numThree = prompt("Enter a number");
if (numThree === null || numThree === "" || isNaN(numThree)) {
  document.write("<h3>Invalid input. Pleasse enter a number.</h3>");
} else {
  numThree = parseFloat(numThree);
  document.write("<h3>Absolute value: " + Math.abs(numThree) + "</h3>");
}

// **************************************************************************************************************

document.write("<h4>Question:4</h4>");
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("<h4>Dice value: " + diceValue + "</h4>");

// **************************************************************************************************************

document.write("<h5>Question:5</h5>");
var coinValue = Math.floor(Math.random() * 2);
document.write(
  "<h5>Coin value: " + (coinValue === 0 ? "1 Heads" : "2 Tails" + "</h5>")
);

// **************************************************************************************************************

document.write("<h6>Question:6</h6>");
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("<h6>Random number between 100 to 1 :" + randomNumber + "</h6>");

// **************************************************************************************************************

document.write("<h1>Question:7</h1>");
var weightInput = prompt(
  "Enter your weight in Kilograms (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):"
);
var weight = parseFloat(weightInput);

if (isNaN(weight)) {
  document.write("<h1>Invalid input. Please enter a number.</h1>");
} else {
  document.write("<h1>The Weight of the user is:" + weight + " Kilograms</h1>");
}

// **************************************************************************************************************

document.write("<h2>Question:8</h2>");
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(userGuess);

if (isNaN(userGuess)) {
  document.write(
    "<h2>Invalid input. Plesa enter a number between 1 to 10.</h2>"
  );
} else {
  if (userGuess === secretNumber) {
    document.write("<h2>Congratulations! You guessed the secret number.</h2>");
  } else {
    document.write("<h2>Sorry, That's not the secret number. Try againg!</h2>");
  }
}

// **************************************************************************************************************

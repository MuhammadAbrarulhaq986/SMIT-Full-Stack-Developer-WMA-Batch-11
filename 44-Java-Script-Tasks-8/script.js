
// ***********IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS *****************
// ****** ****************  Question 1 :program that takes a character [ Number Or String ] in a variable and checks whether the given input is a number, Uppercase letter or Lowercase letter  *****************************************************************
document.write(
  "<h1>Write a program that takes a character [ Number Or String ] in a variable and checks whether the given input is a number, Uppercase letter or Lowercase letter. ( Hint: ASCII  <br> codes:- A=65, Z=90, a=97, z=122). </h1>"
);

alert(
  "Input anything I Will tell you whether you Entered a Number or a Letter (in Uppercase or Lowercase)"
);

var userInput = prompt("Input  Something:");
var letterCase = userInput.charCodeAt(userInput);
var numberCase = parseInt(userInput);

if (letterCase == 65 || letterCase <= 90) {
  document.write("<h1>" + userInput + " is a Uppercase Letter  </h1>");
} else if (letterCase == 97 || letterCase <= 122) {
  document.write("<h1>" + userInput + " is a Lowercase Letter </h1>");
} else if (numberCase == userInput) {
  document.write("<h1>" + userInput + " is a Number </h1>");
} else {
  document.write("<h1> Invalid Input </h1>")
}
// *************************************************************************************

// ************************  Question 2: program that accept two integers and display larger. Also show of the two integers are equal or Not  *****************************************************************
document.write("<h2> Write a JavaScript program that accept two integers and  <br> display larger. Also show of the two integers are equal or Not . </h2>");

alert(" Write two numbers i will show you the larger number ");

var firstNum = prompt("Enter First Number");
var secondNum = prompt("Enter Second Number");
var letter = " ";

if (firstNum > secondNum) {
  document.write("<h2>" + firstNum + " is larger then" + secondNum + "<h2>");
} else if (firstNum >= secondNum) {
  document.write("<h2>" + firstNum + " is equals to" + secondNum + "<h2>");
}
if (secondNum > firstNum) {
  document.write("<h2>" + secondNum + " is larger then" + firstNum + "<h2>");
}

if (firstNum === letter) {
  document.write("<h2> Invalid value use Numbers Only<h2>");
}
// ************************  Question 3  *****************************************************************







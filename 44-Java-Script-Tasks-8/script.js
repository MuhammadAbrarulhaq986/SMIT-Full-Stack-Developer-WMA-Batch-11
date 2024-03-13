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
  document.write("<h1> Invalid Input </h1>");
}

// ************************  Question 2: program that accept two integers and display larger. Also show of the two integers are equal or Not  *****************************************************************
document.write(
  "<h2> Write a JavaScript program that accept two integers and  <br> display larger. Also show of the two integers are equal or Not . </h2>"
);

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
document.write(
  "<h3> Write a program that takes input a number from user and state wether the number is Positive Or Negative Or Zero. </h3>"
);

alert(
  "Enter a Number and I'll tell you whether it's a Negative or Positive number Or Zero. "
);

var inputNum = +prompt("Enter A  Number : ");

if (inputNum < 0) {
  document.write("<h3>" + inputNum + " is a Negative Number </h3>");
} else if (inputNum == 0) {
  document.write("<h3> " + inputNum + "</h3>");
} else if (inputNum > 0) {
  document.write("<h3>" + inputNum + " is  a Positive Number</h3>");
}

// ************************  Question 4 *****************************************************************

document.write(
  "<h4> Write a program that takes a Character [ i.e. String of Lenght 1 ] and returns true if it is a vowel, Otherwise False </h4>"
);

alert("Enter a Alphabet  and I'll tell you whether it's a Vowal or Not.");

var vowal = prompt("Enter an alphabet");
if (vowal === "a") {
  document.write("<h4>" + vowal + " is a Vowal</h4>");
} else if (vowal === "A") {
  document.write("<h4>" + vowal + " is a Vowal</h4>");
} else if (vowal === "e") {
  document.write("<h4>" + vowal + " is a Vowal</h4>");
} else if (vowal === "E") {
  document.write("<h4>" + vowal + " is a Vowal</h4>");
} else if (vowal === "i") {
  document.write("<h4>" + vowal + " is a Vowal</h4>");
} else if (vowal === "I") {
  document.write("<h4>" + vowal + " is a Vowal</h4>");
} else if (vowal === "o") {
  document.write("<h4>" + vowal + " is a Vowal</h4>");
} else if (vowal === "O") {
  document.write("<h4>" + vowal + " is a Vowal</h4>");
} else if (vowal === "u") {
  document.write("<h4>" + vowal + " is a Vowal</h4>");
} else if (vowal === "U") {
  document.write("<h4>" + vowal + " is a Vowal</h4>");
}
// *****************************************************************************************
else if (vowal != "a") {
  document.write("<h4>" + vowal + " is not a Vowal</h4>");
} else if (vowal != "A") {
  document.write("<h4>" + vowal + " is not a Vowal</h4>");
} else if (vowal != "e") {
  document.write("<h4>" + vowal + " is not a Vowal</h4>");
} else if (vowal != "E") {
  document.write("<h4>" + vowal + " is not a Vowal</h4>");
} else if (vowal != "i") {
  document.write("<h4>" + vowal + " is not a Vowal</h4>");
} else if (vowal != "I") {
  document.write("<h4>" + vowal + " is not a Vowal</h4>");
} else if (vowal != "o") {
  document.write("<h4>" + vowal + " is not a Vowal</h4>");
} else if (vowal != "O") {
  document.write("<h4>" + vowal + " is not a Vowal</h4>");
} else if (vowal != "u") {
  document.write("<h4>" + vowal + " is not a Vowal</h4>");
} else if (vowal != "U") {
  document.write("<h4>" + vowal + " is not a Vowal</h4>");
}
// ************************  Question 5 *****************************************************************
document.write(
  "<h5>Write a program that a Store Correct Password in a JavaScript  Variable. <br>Asks user to enter his/her password Valide the two passwords.<br>Check if user has entered password If not then give message <br>[ Please Enter your password ]<br>Check if both password are same. If they are same, show message<br>[ Correct! The password you Entered matches the original password ].<br>Show [ Incorrect password  ] otherwise</h5>"
);

var password;
var password = prompt("Enter Your  Password");
var passwordConfirm = prompt("Confirm Password ");
if (password != passwordConfirm) {
  alert("Incorrect Password!")
} else if (password === passwordConfirm) {
  alert("The password you entered is Correct! it's Matches the original password");
} else {
  alert("Incorrect Password")
}
// ************************  Question 6 *****************************************************************
document.write(
  "<h6>This if/ else statement dose not work. Try to fix it: [ var greeting; ] [ var hour = 13; ]<br> if(hour < 18 ) {greeting = 'Good day'; else greeting = 'Good evebing';} </h6>"
);

var greetingOne = "Good day";
var greetingTwo = "Good evening";
var inputHour = prompt("Enter Hour");

var hour = 13;
if (hour < 18) {
  document.write("<h6>" + greetingOne + "</h6>");
} else {
  document.write("<h6>" + greetingTwo + "</h6>");
}
// ************************  Question 7 *****************************************************************
document.write(
  "<h1> Write a program that takes  time as input from user is 24 Hours Clock fromat like ; 1900 = 7pm. Implement the following  case using if  else and else if statement </h1>"
);

alert("Enter time like: if time is 1pm, Enter it like = 1300, 5pm = 1700 Whatever the time is enters like this I will give you the response according to your time ");

var inputTime = prompt("Enter Your Time");
// 1900 = 7pm
// 1200 = 12pm
// 1700 = 5pm
// 2100 = 9pm
// 2359 = 11:59pm
if (inputTime >= 0 && inputTime < 1200) {
  alert("Good Morning!");
} else if (inputTime >= 1200 && inputTime < 1700) {
  alert("Good Afternoon!");
} else if (inputTime >= 1700 && inputTime < 2100) {
  alert("Good Evening");
} else if (inputTime >= 2100 && inputTime < 2300) {
  alert("Good Night");
} else {
  alert("Invalid Time Input");
}









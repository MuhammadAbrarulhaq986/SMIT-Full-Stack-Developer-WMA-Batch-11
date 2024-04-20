
document.write("<h1>Question:1</h1>");
var firstName = prompt("Please enter your first name:");

var lastName = prompt("Please enter your last name:");

var fullName = firstName + " " + lastName;
document.write("<h1>Hello, " + fullName + "!</h1>");
// ********************************************************************

document.write("<h2>Question:2</h2>");
var mobileModel = prompt("Please enter your favorite mobile model:");
document.write("<h2>The lenght of your favorite mobile phone model is:" + mobileModel.length + "</h2>");
// Length count the number of characters in a string you'r typed words
// ********************************************************************
document.write("<h3>Question:3</h3>");
var str = "Pakistani";
var index = str.indexOf("n");
document.write("<h3>The lenght of the letter 'n' in the word 'Pakistani' is:" + index + "</h3>");
// indexOf count the number of characters in a string you'r typed words
// Counting start from 0 1 2 3 4 5 and soo on
// ********************************************************************
document.write("<h4>Question:4</h4>");
var strTwo = "Hello World";
var index = strTwo.lastIndexOf("l");
document.write("<h4>The lenght of the letter 'l' in the word 'Hello World' is:" + index + "</h4>");
//  lastIndexOf count the last alphabets from the word 
//  Space also count as a character in it
// ********************************************************************
document.write("<h5>Question:5</h5>");
var strThree = "Pakistani";
var index = strThree.indexOf("i");
document.write("<h5>The lenght of the letter 'i' in the word 'Pakistani' is:" + index + "</h5>");

// ********************************************************************
document.write("<h6>Question:6</h6>");
var firstNameOne = prompt("Please enter your first name:");
var lastNameOne = prompt("Please enter your last name:");
var fullNameOne = firstNameOne.concat(" " + lastNameOne);
document.write("<h6>Hello, " + fullNameOne + "!</h6>");

// ********************************************************************
document.write("<h1>Question:7</h1>");
var strFour = "Hyderabad";
var newStr = strFour.replace("Hyder", "Islam");
// REPLACE FUNCTION REPLACE THE WORD WITH THE NEW WORD
document.write("<h1>The new string is: " + newStr + "</h1>");

// ********************************************************************
document.write("<h2>Question:8</h2>");
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMassage = message.replace("and", "&");
document.write("<h2>The new string is: " + newMassage + "</h2>");

// ********************************************************************
document.write("<h3>Question:9</h3>");
var strNum = "472";
var num = Number(strNum);
document.write("<h3>String value: " + strNum + "</h3>");
document.write("<h3>Number value: " + num + "</h3>");
document.write("<h3>String value: " + typeof strNum + "</h3>");
document.write("<h3>Number value: " + typeof num + "</h3>");

// ********************************************************************
document.write("<h4>Question:10</h4>");
var input = prompt("Please enter a word:");
var upperCase = input.toUpperCase();
document.write("<h4>User input " + input + " \nUpper Case: " + upperCase + "</h4>");

// ********************************************************************
document.write("<h5>Question:11</h5>");
var inputTwo = prompt("Please enter a sentence:");
var titleCase = inputTwo.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substring(1).toLocaleLowerCase(); });
document.write("<h5>User input: " + inputTwo + "\nTitle case: " + titleCase + "</h5>");

// ********************************************************************
document.write("<h6>Question:12</h6>");
var numFive = 35.36;
var strFive = numFive.toString();
var newStrFive = strFive.replace(".", "");
document.write("<h6>Number value: " + numFive + " \nString value: " + newStrFive + "</h6>");










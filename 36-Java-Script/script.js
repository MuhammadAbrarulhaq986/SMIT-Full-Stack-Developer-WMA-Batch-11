
// alert  is a opup  window that shows up in the browser
// it's used to show information to users.
alert("Wellcome to JAVA Script!");
window.alert("Thanks for your input!");

// var is use to decalar a Variable
// Words in  double quotes are strings, and words in single quotes are not.
var name = "Abrar";
// if we need to change variable name we write 
// name = "Ace"
//  Now the console  will print Ace instead of Abrar

var nationality;
nationality = "U.S.";

var floogle = "Mark";

var lessonAuthor = "Jon";
var guyWhoKeepsSayingHisOwnName = "Harry";
var x = "Jonny";
// JavaScript allow us to type in  whatever we want into variables

// JavaScript allow us to type in two ways all smaii letters
// like thsi (  hellomynameisharryaandilikecars    )
// OR
// camal Cases like thsi (  helloMyNameIsHarryaAndILikeCars    )


// comments start with two slashes //
/* this is also a comment */
/* In JavaScript you can use comments like this one.
   Comments start with two slash characters (/),  */

// You can also make multiline comments using these syntaxes:
/**/
/* This is a multiline comment */
/* It goes on until another  is found */

var lastName = "_Smith_";
var cityOfOrigin = "_New Orleans_";
var aussieGreeting = "_g'Day_";


var thanx = "Thank  your  Jaan Nii!";
alert(thanx);


// Variables for Numbers
var worth = 100;
var weight = 150;
// WE Can use mathematical expressions  inside var statements, just like in any other place in JavaScript. For example:


var originalNum = 23;
var newNum = originalNum + 7;

var originalNum = 23;
var numToBeAdded = 7;
var newNum = originalNum + numToBeAdded;

// If you enclose a number in quotation marks and add 7...
var originalNum = "23";
var newNum = originalNum + 7;
// if we write  the code above, it will not work because JavaScript thinks that "originalNum" is a string of text rather than a number. To fix this problem

// var  1 stPresident  = "Washington"; This is illagal
// alert(144);
// ...or if you specify a variable that represents a number as an alert message...

var caseQty = 144;
alert(caseQty);


//  Wherever you can use a number, you can use a math expression. For example, you're
//  familiar with this kind of statement.
// You can use both ways to do Mathematical Expression
var popularNumber = 4;
// or This 
var popularNumber = 2 + 2;

alert(2 + 2);
//  The result will be displayed as: 4
// You can perform arithmetic operations using the  following operators: plus (+), minus (-), times (*), divided (/), modulus (%),  
// In JavaScript, the plus (+) operator adds numbers together. However, when it comes to strings  (letters), the plus operator concatenates them               
var popularNumberOne = 12 - 24;

// Multiplication
var popularNumberTwo = 3 * 12;

// Division 
var popularNumberThree = 60 / 8;
var popularNumberFour = 50 / 5;
// The result will be displayed as:  8

// incremented 
var numOne = 5;
var newNumOne = ++numOne;  // numOne is incremented to 2, and newNumOne is assigned the value 2

var numTwo = 10;
var newNumTwo = numTwo++;  // numTwo is incremented to 5, but newNumTwo is assigned the original value of numTwo, which is 4

// ****************************

var numThree = 15;
var newNumThree = --numThree;  // newNumOne is assigned the original value of numOne, which is 1, and then numOne is incremented to 2

var numFour = 2;
var newNumFour = numFour--;  // newNumTwo is assigned the original value of numTwo, which is 4, and then numTwo is decremented to 3


// Math expressions:
// Eliminating ambiguity
var totalCost = 5 + 5 * 4;

var totalCostOne = (5 + 5) / 4;
// var totalCostOne = 5 + 5 / 4; This type of division will not give the correct answars

var totalCostTwo = 1 + (3 * 4);

var totalCostThree = 6 + (9 / 4);

var resultOfComputation = (2 * 4) * 4 + 2;

var numberToSquare = 7;
var squaredNumber = numberToSquare ** 2;

console.log("The square of " + numberToSquare + " is " + squaredNumber);


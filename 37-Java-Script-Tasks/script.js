//  Alert First task
// Error Message if user enter non-numeric value in input box
//  console.log("This is a log message")
// ; console.log("This is a log message");
alert("Error! Plesae Enter a  valid number.");
console.log("This is a Error message");
// he log() method writes (logs) a message to the console.
// The log() method is useful for testing purposes.


//  Alert Second task
alert("Wellcome to JS Land..\n Happy Coding! ");
console.log("This is  a Welcome message");
// By Using \n we can line  break, it's used to insert a new line of text into the document
//  or a text area

//  Alert Third task
alert("Welcome  to JS Land");
console.log("Welcome  to JS Land");

//  Alert Fifth task
alert("Hello... I'can run JS through my Web Browser's Console");
console.log("Hello... I'can run JS through my Web Browser's Console");
// *******************************************************************************************************************
// TASK VARIABLES FOR STRINGS  
var firstName = "Name: Edward";
var lastName = " Elric";
var fullname = firstName + lastName;
alert(fullname);
console.log(fullname);

var age = " Age: 19";
alert(age);
console.log(age);

var certified = "Certified  JavaScript Developer";
alert(certified);
console.log(certified);

// In Console we use \n to break  lines 
// and also we can use multiple arguments with alert function
//  Also  We Can Use \n\r to  Break Lines And Return To Start Of Line
//  \n\r this let us  to ignore  One line and start  another one
var nameOne = "PIZZA\n";
var nameTwo = "PIZZ\n\rZA\n";
var nameThree = "PIZ\n";
var nameFour = "PI\n\r";
var nameFive = "P\n";
var names = nameOne + nameTwo + nameThree + nameFour + nameFive;
alert(names);
console.log(names);

var email = "My Email Address is example123@example.come";
alert(email);
console.log(email);

var Book = "A Smarter WayTo Learn JavaScript";
alert(Book);
console.log(Book);

// In browser  we use <br> to break  lines and 
//  IF we write  to Js that show in  HTML  we use <br>  to break line
var displayOne = "Yah! I can write HTML Content through JavaScript <br>";
document.write(displayOne);
console.log(displayOne);

var special = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(special);
console.log(special);
// ********************** VARIABLES FOR STRINGS TASKS COMPLETED*********************************************************************************************

// ********************** VARIABLES FOR NUMBERS TASKS *********************************************************************************************

var Age = "I am 15 Years old";
alert(Age);
console.log(Age);


// Check if the visitor's count is stored in local storage
let visitCount = localStorage.getItem('visitorCount') || 0;

// Increment the visit count
visitCount++;

// Update the local storage with the new count
localStorage.setItem('visitorCount', visitCount);

// Display the message with the number of visits
alert(`You have visited this site ${visitCount} times`);
console.log(`You have visited this site ${visitCount} times`);

var displayTwo = "My Birth Year is 1990  <br> Data Type of my declared variable is number <br>";
document.write(displayTwo);
console.log(displayTwo);

// Get visitor name
var visitorName = prompt(" Enter your name:");

// Get product title
var productTitle = prompt("Enter the product title:");

// Get quantity
var quantity = prompt("Enter the quantity:");

// Display the Message
var messageTwo = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store";

// Display the message in the browser
document.write(messageTwo);
console.log(messageTwo);
// ********************** VARIABLES FOR NUMBERS TASKS COMPLETED*********************************************************************************************



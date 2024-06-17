// var name = "mark";
// console.log(name);

//  name = "Ace";
// console.log(name);

// var nationality;
// nationality = "U.S";
// console.log(nationality);

// var weight = 150;
// console.log(weight);

//  var originalNum = 25;
//  var newNum = originalNum + 10;
//  console.log(newNum);

//  var newWeight = 25;
//  var total = newWeight + weight;
// console.log(total);

//  var originalNum = "25";
//  var newNum = originalNum + "10";
//  console.log(newNum);

// var num = 1;
// var newNum = num++;
// console.log(num);

// var totalCost = 1 + 3 * 4;
// var totalCost = (1 + 3) * 4;
// console.log(totalCost);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let name = prompt("What is your name?", "");
// alert("Thanks, " + name+ "!");

// var userName = prompt("What is your name?", "");
// alert("Thanks, " + userName+ "!");

// var userName = prompt("What is your name?", "");
// var message = "Thanks, ";
//  var banger = "!";
//  alert(message + userName + banger);


// var message = "Thanks, ";
//  var userName = "Abrar";
//  var banger = "!";
//  var customMess = message + userName + banger;
//  alert(customMess);

// var spec = prompt("Your species is Human", "");



// var question = "Your species?";
// var defaultAnswer = "human";
// var spec = prompt(question, defaultAnswer);

// console.log(spec);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// var numberOfCats = prompt("How many cats?");
// var tooManyCats = numberOfCats + 1;
// console.log(tooManyCats);
// var x = prompt("Where do you live? Karachi, Lahour, Islamabad");
//  if (x === "Karachi"|| x === "Lahour" || x === "Islamabad") {
//  alert("Correct!");
//  }


// var x = prompt("Enter Vatican");
// var correctAnswer = "Vatican";
// if (x === correctAnswer) {
//   alert("Thanks!");
// }


// var x = prompt("Enter Vatican");
// var correctAnswer = "Vatican";
//  if (x === correctAnswer) {
//  alert("Correct!");
//  }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// let x = 5;
// let y = 5;

// if (x == y) {
//   console.log("x is equal to y");
// }

// let x = 5;
// let y = 10;

// if (x!= y) {
//   console.log("x is not equal to y");
// }


// let x = 5;
// let y = "5";

// if (x === y) {
//     // false, because x is a number and y is a string
//     console.log("x is strictly equal to y");
//     }

// let x = 5;
// let y = "5";

// if (x!== y) {
//   console.log("x is strictly not equal to y"); // true, because x is a number and y is a string
// }

// let x = 5;
// let y = 3;

// if (x > y) {
//   console.log("x is greater than y");
// }


// let x = 5;
// let y = 5;

// if (x >= y) {
//   console.log("x is greater than or equal to y");
// }

// let x = 5;
// let y = 10;

// if (x <= y) {
//   console.log("x is less than or equal to y");
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



// var x = prompt("Where does the People live? Vatican or Toranto");
//  if (x === "Vatican") {
//  alert("Correct!");
//  }
//  if (x !== "Vatican") {
//  alert("Wrong answer!");
//  }


// var x = prompt("Where does the People live? Vatican or Toranto");

// if (x === "Vatican") {
//      alert("Correct!");
//      }
//      else {
//      alert("Wrong answer");
//      }


// //**/ Initialize score and userIQ variables
// var score = 0;
// var userIQ = "";

// //* */ Ask the user a question
// var x = prompt("Where does the People live? Vatican or Toranto");

// //* */ Check if the user's answer is correct
// if (x.toLowerCase() === "vatican") {
//     //* */ If correct, display a success message and update score and userIQ
//     alert("Correct!");
//     score++; //* */ increment score
//     userIQ = "good"; //* */ set userIQ to "good"
// } else {
//     //* */ If incorrect, display an error message and update score and userIQ
//     alert("Incorrect");
//     score--; //* */ decrement score
//     userIQ = "problematic"; //* */ set userIQ to "problematic"
// }

// //* */ Display the current score and IQ
// alert("Your score is: " + score + ", and your IQ is: " + userIQ);


// //* Initialize score
// var score = 0;

// //* Ask the user a question
// var x = prompt("Where does the Pope live? Vatican or Rome");

// //* Define the correct answer
// var correctAnswer = "Vatican";

// //* Check the user's answer
// if (x === correctAnswer) {
//     //* Increment score and display correct message
//     score++;
//     alert("Correct! The Pope lives in the Vatican.");
// } else if (x === "Rome") {
//     //* Display close but incorrect message
//     alert("Incorrect but close! The Pope lives in the Vatican, which is in Rome.");
// }
// else {
//     //* Display incorrect message
//     alert("Incorrect. The Pope lives in the Vatican.");
// }

// // * Display final score
// alert("Your score is " + score + ".");
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// //* Define the variables
// var weight = 0; //* Initialize weight variable in kg
// var time = 0; //* Initialize time variable in seconds


// //* Get the user input for weight and time
// weight = prompt("Enter your weight in kg:");
// time = prompt("Enter your running time in minutes:");

// //* Check the conditions
// if (weight > 136 && time < 6) {
//   //* If the conditions are true, display the tryout message
//   alert("Come to our tryout!");
// } else {
//   //* If the conditions are false, display the cookout message
//   alert("Come to our cookout!");
// }



// //* Define the variables
// var weight = 0; //* Initialize weight variable in kg
// var time = 0; //* Initialize time variable in minutes
// var age = 0; //* Initialize age variable
// var gender = ""; //* Initialize gender variable

// //* Get the user input for weight, time, age, and gender
// weight = prompt("Enter your weight in kg:");
// time = prompt("Enter your longest run time in minutes:");
// age = prompt("Enter your age:");
// gender = prompt("Enter your gender (male/female):");

// //* Check the conditions`
// if (weight > 150 && time < 30 && age > 20 && gender === "male" ||gender === "female" ) {
//     //* If the conditions are true, display the tryout message
//     alert("Come to our cookout!");
// } else {
//     //* If the conditions are false, display the cookout message
//     alert("Come to our tryout!");
// }


// // Define the variables
// let SAT = 1000; //* Student's SAT score
// let avg = 900; //* Average SAT score
// let GPA = 2.5; //* Student's GPA
// let sport = ""; //* Student's sport

// // //* Get the user input for SAT, avg, GPA, and sport
// SAT = prompt("Enter your Scholastic Aptitude Test score " + "limite is 0 to 1000: ");
// avg = prompt("Enter your Average score " + "limite is 0 to 900: ");
// GPA = prompt("Enter your GPA score " + "limite is 0 to 2.5:");
// sport = prompt("Enter your favourite sport: taekwondo, football, hockey");

// //* Check if the student meets the admission criteria
// if (SAT > avg || GPA > 2.5 || sport === "taekwondo" || sport === "football" || sport === "hockey") {
//     //* If the criteria is met, welcome the student to Bubba State
//     alert("Welcome to Bubba State!");
// } else {
//     //* If the criteria is not met, suggest appliance repair as an alternative
//     alert("Sorry you didn't make our standard score " + "alternative is you try appliance repair");
// }



// age = prompt("Please enter your age");
// res = prompt("Please enter your residenced China, Pakistan, Russia");

// if (age > 65 || age < 20 && res === "China" || res === "Pakistan" || res === "Russia") {
//     alert("You are not eligible for the vaccine");

//     // alert("You are eligible for the vaccine");
//     } else {
//         // alert("You are not eligible for the vaccine");
//     alert("You are eligible for the vaccine");
//         }


// age = prompt("Please enter your age");
// res = prompt("Please enter your residenced China, Pakistan, Russia");

// if ((age > 65 || age < 20) && res === "china" || res === "pakistan" || res === "russia") {
//     alert("You are not eligible for the vaccine");
// } else {
//     alert("You are eligible for the vaccine");
// }

// let age = parseInt(prompt("Please enter your age"));
// let res = prompt("Please enter your residence (China, Pakistan, Russia)").toLowerCase();


// if (age > 65 || (age < 20 && res === "china" || res === "pakistan" || res === "russia")) {
//     alert("You are not eligible for the vaccine");
// } else {
//     alert("You are eligible for the vaccine");
// }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// //* Declare variables
// var x = 5; //* assign 5 to x
// var y = 5; //* assign 5 to y
// var a = 10; //* assign 10 to a
// var b = 10; //* assign 10 to b
// var c = 15; // *assign 15 to c
// var d = 15; //* assign 15 to d
// var e; //* declare e, but don't assign a value
// var f = 20; //* assign 20 to f
// var g; //* declare g, but don't assign a value
// var h = 25; //* assign 25 to h

//* Conditional statement
// if ((x === y || a === b) && c === d) {
//   // If the condition is true, execute this block
//   g = h; // assign the value of h (25) to g
// } else {
//   // If the condition is false, execute this block
//   e = f; // assign the value of f (20) to e
// }

//* // Print the values of e and g to the console
// console.log("Value of e: ", e); // prints "Value of e: undefined" because e is not assigned a value
// console.log("Value of g: ", g); // prints "Value of g: 25" because g is assigned the value of h

//* Declare variables
// var x = 5; // assign 5 to x
// var y = 5; // assign 5 to y
// var a = 10; // assign 10 to a
// var b = 10; // assign 10 to b
// var c = 15; // assign 15 to c
// var d = 15; // assign 15 to d
// var e; // declare e, but don't assign a value
// var f = 20; // assign 20 to f
// var g; // declare g, but don't assign a value
// var h = 25; // assign 25 to h

// // Conditional statement
// if (c === d) {
//     if (x === y) {
//         g = h;
//     }
//     else if (a === b) {
//         e = f;
//     }
//     else {
//         e = f;
//     }
// }
// else {
//     e = f;
// }

// console.log("Value of e: ", e);
// console.log("Value of g: ", g);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

// alert("Welcome to " + cities[3]);
// console.log("Welcome to " + cities[3]);



// var mixedArray = [1, "Bob", "Now is", true];
// console.log("Welcome to " + mixedArray[3]);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var pets = [];

// pets[0] = "dog";
// pets[1] = "cat";
// pets[2] = "bird";

// console.log("You want to buy " + pets[2]);

// pets[3] = "lizard";
//  pets[6] = "snake";


// console.log("You want to buy " + pets[6]);

// pets[0] = "dog";
// pets[1] = "cat";
// pets[2] = "bird";
// pets[3] = "lizard";
// pets[4] = "fish";
// pets[5] = "gerbil";
// pets[6] = "snake";

// pets.pop();
// console.log(pets);

// pets[0] = "dog";
// pets[1] = "cat";
// pets[2] = "bird";
// pets[3] = "lizard";
// pets[4] = "fish";
// pets[5] = "gerbil";
// pets[6] = "snake";

// pets.push("falcon", "lion");
// console.log(pets);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

// var pets = [];

// pets[0] = "dog";
// pets[1] = "cat";
// pets[2] = "bird";
// pets[3] = "lizard"; 
// pets[4] = "fish";
// pets[5] = "gerbil";
// pets[6] = "snake";

// pets.shift();
// console.log(pets);


// var pets = [];

// pets[0] = "dog";
// pets[1] = "cat";
// pets[2] = "bird";
// pets[3] = "lizard"; 
// pets[4] = "fish";
// pets[5] = "gerbil";
// pets[6] = "snake";

// pets.unshift("falcon", "lion");
// console.log(pets);

// var pets = [];

// pets[0] = "dog";
// pets[1] = "cat";
// pets[2] = "bird";
// pets[3] = "lizard"; 
// pets[4] = "fish";
// pets[5] = "gerbil";
// pets[6] = "snake";

// pets.splice(2,2, "falcon", "lion", "cheeta", "emu");
// console.log(pets);

var pets = [];

pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";
pets[3] = "lizard"; 
pets[4] = "fish";
pets[5] = "gerbil";
pets[6] = "snake";

pets.splice(2,2, "falcon", "lion", "cheeta", "emu");
console.log(pets);




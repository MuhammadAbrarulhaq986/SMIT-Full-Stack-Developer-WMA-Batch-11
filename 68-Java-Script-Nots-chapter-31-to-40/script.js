// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// //* Example 1: Creating a Date object
// //* Create a new Date object, which represents the current date and time
// var rightNow = new Date();
// console.log(rightNow);
//*************************************************** *************************************************** *************************************************** ***************************************************
// //* Example 2: Converting a Date object to a string
// //* Convert the Date object to a string, which can be used for display purposes
// var rightNow = new Date();
// var dateString = rightNow.toString();
// console.log(dateString); //* Output: a string representation of the current date and time

//*************************************************** *************************************************** *************************************************** ***************************************************
// //* Example 3: Extracting the day of the week from a Date object
// //* Create a new Date object, which represents the current date and time
// var rightNow = new Date();
// //* Extract the day of the week from the Date object as a number (0 = Sunday, 1 = Monday,..., 6 = Saturday)
// var theDay = rightNow.getDay();
// console.log(theDay); //* Output: a number from 0 (Sunday) to 6 (Saturday)
//*************************************************** *************************************************** *************************************************** ***************************************************

// //* Example 4: Converting the day of the week number to a day name
// //* Define an array of day names
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// //* Create a new Date object, which represents the current date and time
// var now = new Date();
// //* Extract the day of the week from the Date object as a number (0 = Sunday, 1 = Monday,..., 6 = Saturday)
// var theDay = now.getDay();
// //* Use the day number as an index to get the corresponding day name from the array
// var nameOfToday = dayNames[theDay];
// console.log(nameOfToday); //* Output: the day name, e.g. "Mon"

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // * Example 1: Extracting the month
// //* Create a new Date object
// var d = new Date();
// //* Extract the month as a number (0 = January, 1 = February, ..., 11 = December)
// var currentMonth = d.getMonth();
// //* Log the result to the console
// console.log(currentMonth); //* Output: a number from 0 (January) to 11 (December)
// ****************************************************************************************************************
// //  * Example 2: Extracting the day of the month

// //* Create a new Date object
// var d = new Date();
// //* Extract the day of the month as a number (1-31)
// var dayOfMonth = d.getDate();
// //* Log the result to the console
// console.log(dayOfMonth); //* Output: a number from 1 to 31
// ****************************************************************************************************************

// // * Example 3: Extracting the year
// //* Create a new Date object
// var d = new Date();
// //* Extract the year as a 4-digit number
// var currYr = d.getFullYear();
// //* Log the result to the console
// console.log(currYr); //* Output: a 4-digit number representing the year


// ****************************************************************************************************************

// // * Example 4: Extracting the hour
// //* Create a new Date object
// var d = new Date();
// //* Extract the hour as a number (0-23)
// var currentHrs = d.getHours();
// //* Log the result to the console
// console.log(currentHrs); //* Output: a number from 0 (midnight) to 23 (11 p.m.)


// ****************************************************************************************************************

// // * Example 5: Extracting the minutes
// //* Create a new Date object
// var d = new Date();
// //* Extract the minutes as a number (0-59)
// var currMins = d.getMinutes();
// //* Log the result to the console
// console.log(currMins); //* Output: a number from 0 to 59

// ****************************************************************************************************************

// // * Example 6: Extracting the seconds
// //* Create a new Date object
// var d = new Date();
// //* Extract the seconds as a number (0-59)
// var currSecs = d.getSeconds();
// //* Log the result to the console
// console.log(currSecs); //* Output: a number from 0 to 59

// ****************************************************************************************************************

// // * Example 7: Extracting the milliseconds
// //* Create a new Date object
// var d = new Date();
// //* Extract the milliseconds as a number (0-999)
// var currMillis = d.getMilliseconds();
// //* Log the result to the console
// console.log(currMillis); //* Output: a number from 0 to 999

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// //* Example 1: Calculating the number of days until the U.S. Social Security program goes broke

// //* Create a Date object for the current date and time
// var today = new Date();

// //* Create a Date object for the estimated date when the Social Security program will go broke (June 30, 2035)
// var doomsday = new Date("June 30, 2035");

// //* Extract the milliseconds that have elapsed since the reference date of January 1, 1970
// var msToday = today.getTime();
// var msDoomsday = doomsday.getTime();

// //* Calculate the difference in milliseconds
// var msDiff = msDoomsday - msToday;

// //* Convert the milliseconds to days
// var dDiff = msDiff / (1000 * 60 * 60 * 24);

// //* Round down to the nearest whole day
// var daysTillDoom = Math.floor(dDiff);

// //* Log the result to the console
// console.log("There are " + daysTillDoom + " days until the U.S. Social Security program goes broke.");

// ****************************************************************************************************************
// //* Example 2: Calculating the number of days until a specific date and time

// //* Create a Date object for the current date and time
// var today = new Date();

// //* Create a Date object for the specific date and time (July 21, 1983 13:25:00)
// var targetDate = new Date("July 21, 2050 13:25:00");

// //* Extract the milliseconds that have elapsed since the reference date of January 1, 1970
// var msToday = today.getTime();
// var msTarget = targetDate.getTime();

// //* Calculate the difference in milliseconds
// var msDiff = msTarget - msToday;

// //* Convert the milliseconds to days
// var dDiff = msDiff / (1000 * 60 * 60 * 24);

// //* Round down to the nearest whole day
// var daysTillTarget = Math.floor(dDiff);

// //* Log the result to the console
// console.log("There are " + daysTillTarget + " days until July 21, 2050 13:25:00.");


// ****************************************************************************************************************
// //* Example 3: Condensed version of the code

// //* Calculate the difference in milliseconds between the current date and June 30, 2035
// var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();

//  //* Convert the milliseconds to days and round down
// var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));

// //* Log the result to the console
// console.log("There are " + daysTillDoom + " days until the U.S. Social Security program goes broke.");

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// // * Example 1: Setting the Year

// //* Create a new Date object for the current moment
// var d = new Date();

// //* Set the year of the Date object to 2001, leaving all other elements intact
// d.setFullYear(2001);

// //* Log the updated Date object to the console
// console.log(d); //* Output: 2001-07-25T14:30:00.000Z (assuming current date is July 25, 2022)

// ****************************************************************************************************************
// // * Example 2: Setting the Month

// //* Create a new Date object for the current moment
// var d = new Date();

// //* Set the month of the Date object to 11 (December), leaving all other elements intact
// d.setMonth(11);

// //* Log the updated Date object to the console
// console.log(d); //* Output: 2022-12-25T14:30:00.000Z (assuming current date is July 25, 2022)

// ****************************************************************************************************************
// // * Example 3: Setting the Day of the Month

// //* Create a new Date object for the current moment
// var d = new Date();

// //* Set the day of the month of the Date object to 15, leaving all other elements intact
// d.setDate(15);

// //* Log the updated Date object to the console
// console.log(d); //* Output: 2022-07-15T14:30:00.000Z (assuming current date is July 25, 2022)

// ****************************************************************************************************************

// // * Example 4: Setting the Hours

// //* Create a new Date object for the current moment
// var d = new Date();

// //* Set the hours of the Date object to 13 (1 p.m.), leaving all other elements intact
// d.setHours(13);

// //* Log the updated Date object to the console
// console.log(d); //* Output: 2022-07-25T13:30:00.000Z (assuming current date is July 25, 2022)

// ****************************************************************************************************************

// // * Example 5: Setting the Minutes

// //* Create a new Date object for the current moment
// var d = new Date();

// //* Set the minutes of the Date object to 5, leaving all other elements intact
// d.setMinutes(5);

// //* Log the updated Date object to the console
// console.log(d); //* Output: 2022-07-25T14:35:00.000Z (assuming current date is July 25, 2022)

// ****************************************************************************************************************

// // * Example 6: Setting the Seconds

// //* Create a new Date object for the current moment
// var d = new Date();

// //* Set the seconds of the Date object to 55, leaving all other elements intact
// d.setSeconds(55);

// //* Log the updated Date object to the console
// console.log(d); //* Output: 2022-07-25T14:30:55.000Z (assuming current date is July 25, 2022)

// ****************************************************************************************************************
// // * Example 7: Setting the Milliseconds

// //* Create a new Date object for the current moment
// var d = new Date();

// //* Set the milliseconds of the Date object to 867, leaving all other elements intact
// d.setMilliseconds(867);

// //* Log the updated Date object to the console
// console.log(d); //* Output: 2022-07-25T14:30:00.867Z (assuming current date is July 25, 2022)

// ****** Watch ***********************
// function Watch() {
//     this.element = document.getElementById('watch');
//     this.updateTime();
//     setInterval(this.updateTime.bind(this), 1000);
//   }

//   Watch.prototype.updateTime = function() {
//     var currentTime = new Date();
//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();
//     var timeString = `${hours}:${minutes}:${seconds}`;
//     this.element.innerText = timeString;
//   };

//   var watch = new Watch();
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// //* Example 1: A Simple Function to Display the Current Time

// //* Define a function to display the current time
// function tellTime() {
//     //* Create a new Date object
//     var now = new Date();

//     //* Extract the hours and minutes from the Date object
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();

//     //* Display an alert with the current time
//     alert("Current time: " + theHr + ":" + theMin);
//   }

//   //* Call the function to display the current time
//   tellTime();
// ****************************************************************************************************************

// //*Example 2: A Function to Set the Year of a Date Object
// //* Define a function to set the year of a Date object
// function setYear(year) {
//     //* Create a new Date object
//     var d = new Date();

//     //* Set the year of the Date object
//     d.setFullYear(year);

//     //* Return the updated Date object
//     return d;
//   }

//   //* Call the function to set the year to 2001
//   var d = setYear(2001);
//   console.log(d); //* Output: 2001-07-25T14:30:00.000Z (assuming current date is July 25, 2022)

// ****************************************************************************************************************

// //*   Example 3: A Function to Set the Month of a Date Object
// //* Define a function to set the month of a Date object
// function setMonth(month) {
//     //* Create a new Date object
//     var d = new Date();

//     //* Set the month of the Date object
//     d.setMonth(month);

//     //* Return the updated Date object
//     return d;
//   }

//   //* Call the function to set the month to December (11)
//   var d = setMonth(11);
//   console.log(d); //* Output: 2022-12-25T14:30:00.000Z (assuming current date is July 25, 2022)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// //* Example 1: A Simple Function
// //* Define a function called greetUser that displays an alert message
// function greetUser() {
//     //* Display an alert message
//     alert("Hello, there.");
//   }

//   //* Call the function
//   greetUser(); //* Output: "Hello, there."


// ****************************************************************************************************************

// //*   Example 2: A Function with an Argument

// //* Define a function called greetUser that takes a greeting as an argument
// function greetUser(greeting) {
//     //* Display an alert message using the greeting argument
//     alert(greeting);
//   }

//   //* Call the function with an argument
//   greetUser("Hello, there."); //* Output: "Hello, there."
// ****************************************************************************************************************

// //*   Example 3: Passing a Variable as an Argument
//   //* Define a function called greetUser that takes a greeting as an argument
// function greetUser(greeting) {
//     //* Display an alert message using the greeting argument
//     alert(greeting);
//   }

//   //* Declare a variable and assign it a value
//   var greeting = "Hello, there.";

//   //* Call the function with the variable as an argument
//   greetUser(greeting); //* Output: "Hello, there."

// ****************************************************************************************************************
// //*   Example 4: Passing a Number as an Argument
// //* Define a function called showBigNum that takes a number as an argument
// function showBigNum(num) {
//     //* Display an alert message using the num argument
//     alert("The big number is: " + num);
//   }

//   //* Declare a variable and assign it a value
//   var almostAMil = 999999;

//   //* Call the function with the variable as an argument
//   showBigNum(almostAMil); //* Output: "The big number is: 999999"

//   //* Alternatively, call the function with a literal number as an argument
//   showBigNum(999999); //* Output: "The big number is: 999999"

// ****************************************************************************************************************
// //*   Example 5: Passing Multiple Arguments
// //* Define a function called showMessage that takes three arguments
// function showMessage(m, string, num) {
//     //* Display an alert message using the arguments
//     alert(m + string + num);
//   }
//   //* Declare a variable and assign it a value
//   var month = "March";
//   //* Call the function with multiple arguments
//   showMessage(month, "'s winner number is ", 23); //* Output: "March's winner number is 23"


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// //* Define a function to calculate the order total based on the merchandise total
// function calcTot(merchTot) {
//   //* Declare a variable to hold the order total
//   var orderTot;

//   //* Calculate the order total based on the merchandise total
//   if (merchTot >= 100) {
//     orderTot = merchTot;
//   } else if (merchTot < 50.01) {
//     orderTot = merchTot + 5;
//   } else {
//     orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//   }

//   //* Return the order total to the calling code
//   return orderTot;
// }

// //* Example 1: Calculate the total to charge for a merchandise total of $79.99
// var totalToCharge = calcTot(79.99);
// console.log("Total to charge: $" + totalToCharge); //* Output: Total to charge: $84.99

// //* Example 2: Use a function in an alert message
// alert("Total to charge: $" + calcTot(79.99)); //* Output: Alert box with message "Total to charge: $84.99"

// //* Example 3: Use a function in an expression
// var merchTot = 50;
// var orderTot = merchTot + calcTot(merchTot);
// console.log("Order total: $" + orderTot);
// //* Output: Order total: $55

// //* Example 4: Use a function in a function call
// function calc(price, taxCalcFunc) {
//   return price + taxCalcFunc(price);
// }

// var merchTot = 50;
// var orderTot = calc(merchTot, calcTot);
// console.log("Order total: $" + orderTot); //* Output: Order total: $55

// //* Example 5: Call a function within a function
// function calcTot(price) {
//   return price + calcShip(price);
// }

// function calcShip(price) {
//   return 5 + (.03 * (price - 50));
// }

// var merchTot = 75;
// var orderTot = calcTot(merchTot);
// console.log("Order total: $" + orderTot); //* Output: Order total: $80.25

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// // * Example 1: Global Variable
// //* Declare a global variable
// var theSum;

// //* Call a function to assign a value to the global variable
// addNumbers();

// //* The function
// function addNumbers() {
//   //* Assign a value to the global variable
//   theSum = 2 + 2;
// }

// //* The global variable can be accessed anywhere
// alert(theSum); //* Output: 4

// ****************************************************************************************************************
// // * Example 2: Local Variable
// //* The function
// function addNumbers() {
//   //* Declare a local variable
//   var theSum = 2 + 2;
// }
// //* The local variable is only accessible within the function
// alert(theSum); //* Error: theSum is not defined

// ****************************************************************************************************************
// //  * Example 3: Global and Local Variables with the Same Name
// //* Declare a global variable
// var theSum = 1000;
// //* Call a function
// addNumbers();
// //* The function
// function addNumbers() {
//   //* Declare a local variable with the same name as the global variable
//   var theSum = 2 + 2;
// }
// //* The global variable has a value of 1000
// alert(theSum); //* Output: 1000
// //* The local variable has a value of 4, but it's only accessible within the function

// ****************************************************************************************************************

// // * Example 4: Returning a Value from a Function
// //* Declare a global variable
// var theSum = addNumbers();
// //* The function
// function addNumbers() {
//   //* Declare a local variable
//   var theSum = 2 + 2;
//   //* Return the value of the local variable
//   return theSum;
// }
// //* The global variable has the value returned from the function
// alert(theSum); //* Output: 4

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// //* Get the current day of the week
// var dayOfWk = new Date().toLocaleString("en-PK", { weekday: "short" });

// //* Example 1: Conditional Statements
// if (dayOfWk === "Sat" || dayOfWk === "Sun") {

//   //* If it's Saturday or Sunday, display "Whoopee!"
//   //* This is a weekend day, so let's celebrate!
//   alert("Whoopee!");
// } else if (dayOfWk === "Fri") {
//   //* If it's Friday, display "TGIF!"
//   //* The weekend is almost here, let's get excited!
//   alert("TGIF!");
// } else {
//   //* If it's a weekday, display "Shoot me now!"
//   //* It's a regular day, let's just get through it...
//   alert("Shoot me now!");
// }
// ****************************************************************************************************************************************************************************************

// //* Example 2: Switch Statement
// switch (dayOfWk) {
//   //* Case 1: If dayOfWk is "Sat", display "Whoopee!"
//   //* Saturday is a weekend day, let's celebrate!
//   case "Sat":
//     alert("Whoopee");
//     //* Exit the switch statement, we're done!
//     break;

//   //* Case 2: If dayOfWk is "Sun", display "Whoopee!"
//   //* Sunday is also a weekend day, let's celebrate!
//   case "Sun":
//     alert("Whoopee");
//     //* Exit the switch statement, we're done!
//     break;

//   //* Case 3: If dayOfWk is "Fri", display "TGIF!"
//   //* Friday is almost the weekend, let's get excited!
//   case "Fri":
//     alert("TGIF!");
//     //* Exit the switch statement, we're done!
//     break;

//   //* Default case: If none of the above, display "Shoot me now!"
//   //* It's a regular weekday, let's just get through it...
//   default:
//     alert("Shoot me now!");
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // //* Get the current day of the week
// var dayOfWk = new Date().toLocaleString("en-PK", { weekday: "short" });

// // * Example 1: Switch Statement with Break
// switch (dayOfWk) {
//   //* Case 1: If dayOfWk is "Sat", display "Whoopee!"
//   case "Sat":
//     alert("Whoopee!"); //* execute this statement if dayOfWk is "Sat"
//     break; //* exit the switch statement to avoid executing other cases

//   //* Case 2: If dayOfWk is "Sun", display "Whoopee!"
//   case "Sun":
//     alert("Whoopee!"); //* execute this statement if dayOfWk is "Sun"
//     break; //* exit the switch statement to avoid executing other cases

//   //* Case 3: If dayOfWk is "Fri", display "TGIF!"
//   case "Fri":
//     alert("TGIF!"); //* execute this statement if dayOfWk is "Fri"
//     break; //* exit the switch statement to avoid executing other cases

//   //* Default case: If none of the above, display "Shoot me now!"
//   default:
//     alert("Shoot me now!"); //* execute this statement if dayOfWk is not "Sat", "Sun", or "Fri"
// }

// ****************************************************************************************************************************************************************************************

// //* Get the current day of the week
// var dayOfWk = new Date().toLocaleString("en-PK", { weekday: "short" });

// // * Example 2: Switch Statement without Break ( warning: incorrect behavior )
// switch (dayOfWk) {
//   //* Case 1: If dayOfWk is "Sat", display "Whoopee!"
//   case "Sat":
//     alert("Whoopee!"); //* execute this statement if dayOfWk is "Sat"

//   //* Case 2: If dayOfWk is "Sun", display "Whoopee!"
//   case "Sun":
//     alert("Whoopee!"); //* execute this statement if dayOfWk is "Sun"

//   //* Case 3: If dayOfWk is "Fri", display "TGIF!"
//   case "Fri":
//     alert("TGIF!"); //* execute this statement if dayOfWk is "Fri"

//   //* Default case: If none of the above, display "Shoot me now!"
//   default:
//     alert("Shoot me now!"); //* execute this statement if dayOfWk is not "Sat", "Sun", or "Fri"
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


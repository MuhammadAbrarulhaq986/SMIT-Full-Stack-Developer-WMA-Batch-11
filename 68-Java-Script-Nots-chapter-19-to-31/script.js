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
//*   Example 5: Passing Multiple Arguments
//* Define a function called showMessage that takes three arguments
function showMessage(m, string, num) {
    //* Display an alert message using the arguments
    alert(m + string + num);
  }
  //* Declare a variable and assign it a value
  var month = "March";
  //* Call the function with multiple arguments
  showMessage(month, "'s winner number is ", 23); //* Output: "March's winner number is 23"
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!






































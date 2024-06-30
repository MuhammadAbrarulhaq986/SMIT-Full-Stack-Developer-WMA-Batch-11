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

// * Example 1: Setting the Year

//* Create a new Date object for the current moment
var d = new Date();

//* Set the year of the Date object to 2001, leaving all other elements intact
d.setFullYear(2001);

//* Log the updated Date object to the console
console.log(d); //* Output: 2001-07-25T14:30:00.000Z (assuming current date is July 25, 2022)

// ****************************************************************************************************************
// * Example 2: Setting the Month

// Create a new Date object for the current moment
var d = new Date();

// Set the month of the Date object to 11 (December), leaving all other elements intact
d.setMonth(11);

// Log the updated Date object to the console
console.log(d); // Output: 2022-12-25T14:30:00.000Z (assuming current date is July 25, 2022)

// ****************************************************************************************************************
// * Example 3: Setting the Day of the Month

// Create a new Date object for the current moment
var d = new Date();

// Set the day of the month of the Date object to 15, leaving all other elements intact
d.setDate(15);

// Log the updated Date object to the console
console.log(d); // Output: 2022-07-15T14:30:00.000Z (assuming current date is July 25, 2022)

// ****************************************************************************************************************

// * Example 4: Setting the Hours

// Create a new Date object for the current moment
var d = new Date();

// Set the hours of the Date object to 13 (1 p.m.), leaving all other elements intact
d.setHours(13);

// Log the updated Date object to the console
console.log(d); // Output: 2022-07-25T13:30:00.000Z (assuming current date is July 25, 2022)

// ****************************************************************************************************************

// * Example 5: Setting the Minutes

// Create a new Date object for the current moment
var d = new Date();

// Set the minutes of the Date object to 5, leaving all other elements intact
d.setMinutes(5);

// Log the updated Date object to the console
console.log(d); // Output: 2022-07-25T14:35:00.000Z (assuming current date is July 25, 2022)

// ****************************************************************************************************************

// * Example 6: Setting the Seconds

// Create a new Date object for the current moment
var d = new Date();

// Set the seconds of the Date object to 55, leaving all other elements intact
d.setSeconds(55);

// Log the updated Date object to the console
console.log(d); // Output: 2022-07-25T14:30:55.000Z (assuming current date is July 25, 2022)

// ****************************************************************************************************************
// * Example 7: Setting the Milliseconds 

// Create a new Date object for the current moment
var d = new Date();

// Set the milliseconds of the Date object to 867, leaving all other elements intact
d.setMilliseconds(867);

// Log the updated Date object to the console
console.log(d); // Output: 2022-07-25T14:30:00.867Z (assuming current date is July 25, 2022)

// ****************************************************************************************************************
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


































































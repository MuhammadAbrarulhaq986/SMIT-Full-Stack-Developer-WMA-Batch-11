// *********************************************************************************************************************************
document.write("<h1>Question:8</h1>");
// var laterDate = new Date(2020, 11, 31);
// document.write("<h1>The last day of the last month of 2020 is:" + laterDate + "</h1>");
var laterDate = new Date(2020, 11, 1);
laterDate.setDate(laterDate.getDate() - 1);
document.write("<h1>The last day of the last month of 2020 is: " + laterDate + "</h1>");

// *********************************************************************************************************************************
document.write("<h2>Question:9</h2>");

var ramadanStartDate = new Date("2015-06-18");
var today = new Date();
var timeDiff = today.getTime() - ramadanStartDate.getTime();
var daysPast = Math.floor(timeDiff / (1000 * 3600 * 24));

document.write("<h2>Number of days past since 1st Ramadan: " + daysPast + "</h2>")

// *********************************************************************************************************************************
document.write("<h3>Question:10</h3>");

var referenceDate = new Date("1970-01-01");
var start2015 = new Date("1970-01-01");
var timeDiffTwo = start2015.getTime() - referenceDate.getTime();
var elapaedSeconds = Math.floor(timeDiffTwo / 1000);

// **** var pastTime = document.createElement("h3"); ********************************************************************************************************************************
// **** WHIT THIS YOU CAN APPLY H3 STYLING  ***************************************************************************************************
var pastTime = document.createElement("h3");

pastTime.textContent = "Elapsed seconds between reference date and beginning of 2015: " + elapaedSeconds;
document.body.appendChild(pastTime);

// *********************************************************************************************************************************
document.write("<h4>Question:11</h4>");

var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
var paragraph = document.createElement('h4');
paragraph.textContent = "Current date: " + currentDate + " 1 hour ago, it was " + currentDate;
document.body.appendChild(paragraph);

// *********************************************************************************************************************************
document.write("<h5>Question:12</h5>");

var currentDateTwo = new Date();
currentDateTwo.setFullYear(currentDateTwo.getFullYear() - 100);
document.write("<h5>The date 100 years back is: " + currentDateTwo + "</h5>")
// *********************************************************************************************************************************

document.write("<h6>Question:13</h6>");
var age = prompt("Please enter your age:");
var birthYear = new Date().getFullYear() - age;
var paragraphTwo = document.createElement("h6");

paragraphTwo.textContent = "Your birth year is: " + birthYear;
document.body.appendChild(paragraphTwo);

// *********************************************************************************************************************************
document.write("<h1>Question:14</h1>");

var customerName = "Muhammad Abrar ul haq";
var customerMonth = "January 2023";
var numberOfUnit = 500;
var chargesPerUnit = 21.5;
var latePaymentSurcharge = 2.5;

var netAmountPayable = numberOfUnit * chargesPerUnit;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

document.write("<h1>Customer Name: " + customerName + "<br></h1>");
document.write("<h1>Customer Month: " + customerMonth + "<br></h1>");
document.write("<h1>Number of units: " + numberOfUnit + "<br></h1>");
// ************* TOFIXED ADD NUMBER AFTER POINT ************************************************************************
// ************* IF NUMBER IS 100 toFixed ADD 100.0 ********************************************************************
// ************* IF YOU WANT MORE NUMBER AFTER POINT YOU CAN INCREASE THE VALUE ****************************************
// ************* toFixed(2) IT WILL INCREASE THE NUMBER AFTER POINT ****************************************************
document.write("<h1>Charges per unit: " + chargesPerUnit.toFixed(2) + "<br></h1>");
document.write("<h1>Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "<br></h1>");
document.write("<h1>Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br></h1>");
document.write("<h1>Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "<br></h1>");


// *********************************************************************************************************************************

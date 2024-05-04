// ***  SHOWING TIME IN ALERT **************************************************************************************************************************
// var now = new Date();
//  var theHr = now.getHours();
//  var theMin = now.getMinutes();
//  alert("time: " + theHr + ":" + theMin);
//  tellTime();

// ***  SHOWING TIME THROUGH FUNCTION **************************************************************************************************************************
// function tellTime() {   
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     document.write("<h1>time: " + theHr + ":" + theMin+"</>");
// }
// tellTime();

// ***  SHOWING FUNCTION WORKING  **************************************************************************************************************************
// function greetUsser() {
//     document.write("<h1>HELLO, THERE.</>");
// };
// greetUsser();

// function greetUsser(GREETING) {
//     alert("<h1>GREETING</>");
// };
// greetUsser();

// var greeting = "Hello There";
// alert(greeting);

// ***  SHOWING FUNCTION WORKING  **************************************************************************************************************************
// var orderTot;
// if (merchTot >= 100) {
//     orderTot = merchTot;
// }
// else if(merchTot < 50.01) {
//     orderTot = merchTot + 5;
// } else {
//     orderTot = merchTot + 5 + (.03 * merchTot - 50)
// }
// console.log(orderTot);

// function calcTot(merchTot) {
//     var orderTot;
//     if (merchTot >= 100) {
//         orderTot = merchTot;
//     }
//     else if(merchTot < 50.01) {
//         orderTot = merchTot + 5;
//     } else {
//         orderTot = merchTot + 5 + (.03 * merchTot - 50)
//     }
//      return orderTot;
// }



// *****************************************************************************************************************************

document.write("<h1>Question:1</h1>");
document.write("<h1>" + Date() + "</h1>");

// *****************************************************************************************************************************

document.write("<h2>Question:2</h2>");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = new Date().getMonth();
document.write("<h2>Current Month: " + months[currentMonth] + "</h2>");

// *****************************************************************************************************************************

document.write("<h3>Question:3</h3>");
var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
var currentDay = new Date().getDay();
document.write("<h3>Current Day " + days[currentDay] + "<h3>");

// *****************************************************************************************************************************

document.write("<h4>Question:4\n This will show in alert</h4>");
var today = new Date();
var day = today.getDay();
if (day === 6 || day === 0) {
    alert("It's Fun day!");
} else {
    alert("It's a weekday.");
}

// *****************************************************************************************************************************

document.write("<h5>Question:5</h5>");
var todayTwo = new Date();
var month = todayTwo.getDate();
if (day < 16) {
    document.write("<h5>First fifteen days of the month</h5>");
} else {
    alert("<h5>Last days of the month</h5>");
}


// *****************************************************************************************************************************

document.write("<h6>Question:6</h6>");
var currentTime = new Date();
var minutesSinceMidNightJan = Math.floor(currentTime.getTime() / 60000);
document.write("<h6>Current Date: " + currentTime + "</h6>");
document.write("<h6>Minutes Since January 1, 1970: " + minutesSinceMidNightJan + "</h6>");


// *****************************************************************************************************************************

document.write("<h1>Question:7</h1>");
var now = new Date();
var hour = now.getHours();
if (hour < 12) {
    document.write("<h1>It's AM</h1>")
} else {
    document.write("<h1>It's PM</h1>")

}

// *****************************************************************************************************************************

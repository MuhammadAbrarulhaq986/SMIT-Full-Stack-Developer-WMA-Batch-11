function showTime() {
    var date = new Date();
    var hours = date.getHours(); // 0 - 23
    var minutes = date.getMinutes(); // 0 - 59
    var seconds = date.getSeconds(); // 0 - 59
var session = "AM";

if(hours == 0){
    hours = 12;
}
if(hours > 12){
    hours = hours - 12;
    session = "PM";
}
hours = (hours < 10) ? "0" + hours : hours;
minutes = (minutes < 10) ? "0" + minutes : minutes;
seconds = (seconds < 10) ? "0" + seconds : seconds;
var time = hours + ":" + minutes + ":" + seconds + " " + session;

document.getElementById("MyClockDisplay").innerText = time;
document.getElementById("MyClockDisplay").textContent = time;

setTimeout(showTime, 1000);
};

showTime();

function getDaysLeft(date) {
    var futureDate = new Date(date);
    var currentDate = new Date();
  
    var futureMilli = futureDate.getTime();
    var currentMilli = currentDate.getTime();
    var diff = futureMilli - currentMilli;
    var daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    return daysLeft;
  }
  
  var daysLeftJan01 = getDaysLeft("jan 01, 2025");
  var daysLeftMay01 = getDaysLeft("may 01, 2024");
  
  document.write("Days left until Jan 01, 2025: " + daysLeftJan01);
  document.write("Days left until May 01, 2024: " + daysLeftMay01);
  var iccWorldCupDate = new Date("oct 15, 2027");
  var currentDate = new Date();



  
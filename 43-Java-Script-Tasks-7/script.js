// ***************** USER INPUT & CONDITIONAL STATEMENT *************************************************************************************8

// ***************** Citys Example  *************************************************************************************8
var cityName1 = "Karachi";
var cityName2 = "Lahour";
var cityName3 = "Islamabad";
var cityName4 = "Quetta";

var cityName = prompt("Enter your City Name:");

if (cityName === cityName1) {
  document.write(
    "<h1>Welcome To Karachi. Famous Things The City of Lights</h1>"
  );
} else if (cityName === cityName2) {
  document.write("<h1>Welcome To Lahour. Famous Things Lahour Lahour Haa</h1>");
} else if (cityName === cityName3) {
  document.write(
    "<h1>Welcome To Islamabad. Famous Things The City of Burgers</h1>"
  );
} else if (cityName === cityName4) {
  document.write(
    "<h1>Welcome To Quetta. Famous Things Miri Fort-The Quintessential</h1>"
  );
} else {
  document.write("<h1>Sorry, that city is not recongnized</h1>");
}

// ***************** Gender Example  *************************************************************************************
var genderMale = "Male";
var genderFemale = "Female";

var gender = prompt("Enter your Gender");

if (gender === genderMale) {
  document.write("<h1>Good Morning Sir</h1>");
  document.write("<h1>I hope you have a Good day</h1>");
} else if (genderFemale === genderFemale) {
  document.write("<h1>Good Morning Ma'am</h1>");
  document.write("<h1>I hope you have a Good day</h1>");
} else {
  document.write("<h1>Please Enter Male or Female</h1>");
}
// ***************** Gender Example  *************************************************************************************

// ***************** USER INPUT & CONDITIONAL STATEMENT *************************************************************************************8

// ***************** City Example  *************************************************************************************8
var cityName1 = "Karachi";
var cityName2 = "Lahour";
var cityName3 = "Islamabad";
var cityName4 = "Quetta";

var cityName = prompt(
  "Enter your City Name: Karachi, Lahour, Islamabad, Quetta"
);

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

// ***************** Marks Sheet *************************************************************************************
var subjectName1 = prompt("Enter First Subject");
var subjectName2 = prompt("Enter Second Subject");
var subjectName3 = prompt("Enter Third Subject");

var enterMarks = "Enter Your Marks";
var subject1 = +prompt(enterMarks);
var subject2 = +prompt(enterMarks);
var subject3 = +prompt(enterMarks);

var subjectNum1 = subject1;
var subjectNum2 = subject3;
var subjectNum3 = subject3;

var totalSubjectMarks = 100;
var overAllMarks = 300;

var resultSubject1 = (subject1 / totalSubjectMarks) * 100;
var resultSubject2 = (subject2 / totalSubjectMarks) * 100;
var resultSubject3 = (subject3 / totalSubjectMarks) * 100;

var obtainedMarks = subjectName1 + subjectName2 + subjectName3;
var overAllResuls = (obtainedMarks / overAllMarks) * 100;

document.write(
  "<h1>Subjects  Total Marks  Obtained Marks    Result</h1><br>" +
  "<p>" + subjectName1 + "  " + totalSubjectMarks + "  " + subject1 + "  " + resultSubject1 + "% </p> <br>"
);
document.write("<p>" + subjectName2 + "  " + totalSubjectMarks + "  " + subject2 + "  " + resultSubject2 + "% </p> <br>"
);
document.write("<p>" + subjectName3 + "  " + totalSubjectMarks + "  " + subject3 + "  " + resultSubject3 + "% </p> <br>"
);
document.write("<p>" + overAllMarks + "  " + obtainedMarks + "  " + overAllResuls + "% </p> <br>"
);
// ***************** Marks Sheet Completed *************************************************************************************

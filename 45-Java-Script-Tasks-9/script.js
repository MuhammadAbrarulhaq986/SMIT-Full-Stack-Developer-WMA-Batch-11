// ******************  Question 1 and  2 are the same *********************************************************************************************************************************
var QuestionOne;
document.write("<h1>QuestionOne:(Declare an empty array using JS literal notation to store student names in future)</h1>");
// Declare an empty array
var studentNames = ["Alice", " Bob", " Charlie "];
//  Using push to  add items to the array.
studentNames.push(' Jonny Bravo');
studentNames.push(' John Doe ');

document.write(studentNames);


// ******************  Question 3 *********************************************************************************************************************************
var QuestionThree;
document.write("<h1>QuestionThree:(Declare and initialize a strings array)</h1>");

var stringArray = ["Apple', 'Banana', 'Orange'"];
document.write(stringArray);

// ******************  Question 4 *********************************************************************************************************************************
var QuestionFour;
document.write("<h1>QuestionFour:(Declare and initialize a numbers array)</h1>");
var numberArrary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numberArrary.push(11, 12, 13, 14, 15);
document.write(numberArrary);

// ******************  Question 5 *********************************************************************************************************************************
var QuestionFive;
document.write("<h1>QuestionFive:(Declare and initialize a boolean array)</h1>");

var booleanArrary = [true, false, true, false, true];
document.write(booleanArrary);

// ******************  Question 6 *********************************************************************************************************************************
var QuestionSix;
document.write("<h1>QuestionSix:( Declare and initialize a mixed array)</h1>");

var mixedArrary = ["Watermelon", 1, true, "Pineapple", 2, false, "Avocado"];
document.write(mixedArrary);


// ******************  Question 7 *********************************************************************************************************************************
var QuestionSeven;
document.write(
    "<h1>QuestionSeven:( Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser )</h1>"
);
var educationQualifications = ["SSC", "HSC", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write(educationQualifications);

// ******************  Question 8 *********************************************************************************************************************************
var QuestionEight;
document.write(
    "<h1>QuestionEight:( Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students )</h1>"
);

// Declare an array to store the names of the students
var studentNamesTwo = ["Dan", "Jack", "Mark"];
//  Declare an array to store the scores of the students
var studentScores = [450, 480, 460];
//  Claculate the total marks
var totalMarks = 500;
//  Calculate the percentages of the student
var studentPercentages = [];
for (var i = 0; i < studentNamesTwo.length; i++) {
    studentPercentages[i] = (studentScores[i] / totalMarks) * 100;
}
//  Display the scores and percentages of the students
document.write("<h2>Scores and Percentages of the Students</h2>");
document.write('<table border= "1">');
document.write("<tr><th>Name</th><th>Score</th><th>Percentage</th></tr>")

for (var i = 0; i < studentNamesTwo.length; i++) {
    document.write("<tr><td>" + studentNamesTwo[i] + "</td><td>" + studentScores[i] + "</td><td>" + studentPercentages[i].toFixed(2) + "%</td></tr>");
}
document.write("</table>");






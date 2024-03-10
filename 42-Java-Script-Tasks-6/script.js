// ****************************   Arithmetic Display Increment and Decrement, post-Increment, post-Decrement  *************************************************************************************
//  Prompt the user for a number 
var num = prompt("Enter a number:");
//  Convert the input to a number 
num = parseInt(num);
//  Display the heading 
document.write("<h1>Arithmetic Display Increment and Decrement, post-Increment, post-Decrement </h1>");
//  Display the number 
document.write("<p>Number: " + num + "<p>");
//  Display the Increment number
document.write("<p>Increment Number " + (num++) + "<p>");
//  Display the Decrement number
document.write("<p>Decremented Number " + (num--) + "<p>");
//  Display the post-Increment number
document.write("<p>Post Incremented Number:" + ++num + "</p>");
//  Display the post-Decrement number
document.write("<p>Post Decrement Number:" + --num + "</p>");
// ****************************   Arithmetic Display Increment and Decrement, post-Increment, post-Decrement Completed *************************************************************************************

// ****************************   Initialize variables a and b  *************************************************************************************
document.write("<h1>Initialize variables a and b</h1>")
//  Initialize variables a and b
var a = 10, b = 5;
//  Decrement a
--a;
// a is now 1

// Decrement a and b , then subtract b from a
var temp = --a - --b;
//  a is now 1, b is now 0, and temp is now 1

//  Increment b, then add it to the result
var result = temp + ++b + b--;
// temp is now 1, b is now 1, and result is now 3

// Display the values of a, b, and result
document.write(" <br>a: </br>" + a);
//  Output: a: 1 
document.write("<br>b: </br>" + b);
//  Output: b: 1 
document.write("<br>result: </br>" + result);
// Output : result: 4
// ****************************   Initialize variables a and b Completed *************************************************************************************

// ****************************   Initialize subject names and their corresponding full marks *************************************************************************************
// Initialize subject names and their corresponding full marks
var subjects = [
    { name: "Math", fullMarks: 100 },
    { name: "Science", fullMarks: 100 },
    { name: "English", fullMarks: 50 },
    { name: "History", fullMarks: 50 },
    { name: "Physics", fullMarks: 50 }
];

// Initialize an empty array for storing subject marks
var subjectMarks = [];

// Prompt the user to enter the marks for each subject
for (var i = 0; i < subjects.length; i++) {
    var subject = subjects[i];
    var marks = prompt("Enter the marks for " + subject.name + " out of " + subject.fullMarks + ":");
    subjectMarks.push(parseInt(marks));
}

// Display the subject total marking table
document.write("<h1>Subject Total Marking Table</h1>");
document.write("<table>");
document.write("<tr><th>Subject</th><th>Marks</th><th>Full Marks</th><th>Percentage</th></tr>");

for (var i = 0; i < subjects.length; i++) {
    var subject = subjects[i];
    var mark = subjectMarks[i];
    var percentage = (mark / subject.fullMarks) * 100;
    document.write("<tr><td>" + subject.name + "</td><td>" + mark + "</td><td>" + subject.fullMarks + "</td><td>" + percentage.toFixed(2) + "%</td></tr>");
}

document.write("</table>");
// ****************************   Initialize subject names and their corresponding full marks Completed *************************************************************************************

// *****************   Question  9  **********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************8
var QuestionOne;
document.write("<h1>QuestionNine</h1 > ");

// Initialize the array with color names
var colors = ["<h3>red", "blue", "green", "yellow</h3>"];
// Display the array elements
document.write("<h2>Initial Arrary:</h2>", colors);

// a. Ask the user what color he/she wants to add to the
//  beginning & add that color to the beginning of the array.
var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBeginning);
// Display the updated array in your browser. after adding color in the  beginning
document.write("<h2>Arrary after adding color to the beginning:</h2>", colors);

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array
var colorToAddInTheEnd = prompt("Enter a color to add in the End:");
colors.push(colorToAddInTheEnd);
// Display the updated array in your browser. after  adding color at the end
document.write("<h2>Arrary after adding color to the end:", colors);

// c. Add two more color to the beginning of the array.
colors.unshift("purple", "orange");
// Display the updated array in your browser. After Adding Two Colors At The Begining Of Array
document.write("<h2>Arrary after adding two more color to the beginning:</h2>", colors);

// d. Delete the first color in the array.
colors.shift(); // this function is used for deleting the element from the start of an array
// Display the updated array in your browser. After Deleting First Color From The Array
document.write("<h2>Arrart after deleting the first color:</h2>", colors);

// e. Delete the last color in the array.
colors.pop(); // This Function Is Used  For Removing The Element From The Last In An Array
// Display the updated array in your browser. After Deleting The Last Color From The Array
document.writeln("<h2>Arrary after deleting the last color:</h2>", colors);

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. .
var indexToAdd = parseInt(prompt("Enter the index to add a color:"));
var colorNameToAdd = prompt("Enter the color name to add:");
colors.splice(indexToAdd, 0, colorNameToAdd)
// Display the updated array in your browser.
document.write("<h2>Array after adding color at index</h2>", colors);
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete.
//  Then remove the same number of color(s) from user-defined position/index
var indexToDelete = parseInt(prompt("Enter the index to delete colors:"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete"));
// splice () method is used to change the content of an array by removing or replacing existing elements and/or 
colors.splice(indexToDelete, numberOfColorsToDelete);
// . Display the updated array in your  browser.
document.write("<h2>Array after deleting colors at index:</h2>", colors);


// *****************   Question  10 **********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
var QuestionTwo;
document.write("<h1>QuestionTen:</h1 >");

var studentMarks = ["<h3>", 100, 150, 200, 250, 300, 350, 400, 450, 500, "</h3>"];
document.write("<h2>These are the total Students Marks</h2>", studentMarks);

// Initialize an array with student marks
studentMarks.sort(function (a, b) {
    return a - b;
});

// Prompt the user to enter a score to find its position 
var userMarks = parseInt(prompt("Enter a score to find its position in the sorted array: "));

//  Find the index of the score in the sorted arrary using an if statement
var index = studentMarks.indexOf(userMarks);
if (index > -1) {
    alert("The marks of " + userMarks + "is at position" + (index + 1) + "in the sorted arrary.")
} else {
    alert("The marks of " + userMarks + "is not in the sorted arrary");
}


// *****************   Question  11**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
var QuestionThree;
document.write("<h1>QuestionEleven:</h1 >");

var cities = ["<h3>Karachi", "Lahour", "Islamabad", "Quetta", "Peshawar</h3>"];

var selectedCities = [];

// Copy the first 3 elements from cities array to selectedCities array
if (cities.length >= 3) {
    selectedCities = cities.slice(0, 3);
} else {
    selectedCities = cities.slice();
}
document.write("<h2>Selected Cities:</h2>", "<ul>", selectedCities.join("</li><li>"), "</ul>");


// *****************   Question  12**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
var QuestionFour;
document.write("<h1>QuestionTwelve:</h1 >");

var arr = ["<h2>Arrary ", "This ", "is ", "my ", "cat</h2>"];
// Join the array elements into a single string
var singleString = arr.join(", ");
// Display the single string
document.write(singleString);
var str = ["<h2>String ", "This ", "is ", "my ", "cat</h2>"];
// Join the array elements into a single string
var singleString = str.join(" ");
// Display the single string
document.write(singleString);

// *****************   Question  13  **********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
var QuestionFive;
document.write("<h1>QuestionThirteen:</h1 >");

var arraryTwo = [];

//  Adding Element
arraryTwo.push("Decices:<br>Keyboard,mouse, Printer, Monitor");
arraryTwo.push("Out:<br>Keyboard");
arraryTwo.push("Out:<br>Mouse");
arraryTwo.push("Out:<br>Printer");
arraryTwo.push("Out:<br>Monitor");

//  Accessing the values 
document.write("<h2>" + arraryTwo.shift() + "<h2>");
document.write("<h2>" + arraryTwo.shift() + "<h2>");
document.write("<h2>" + arraryTwo.shift() + "<h2>");
document.write("<h2>" + arraryTwo.shift() + "<h2>");



// *****************   Question  14 **********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
var QuestionSix;
document.write("<h1>QuestionFourteen:</h1 >");



var arraryThree = [];

//  Adding Element
arraryThree.push("Decices:<br>Keyboards,mouses, Printers, Monitors");
arraryThree.push("Out:<br>Keyboards");
arraryThree.push("Out:<br>Mouses");
arraryThree.push("Out:<br>Printers");
arraryThree.push("Out:<br>Monitors");

//  Accessing the values 
document.write("<h2>" + arraryThree.pop() + "<h2>"); // Output s "Monitor"
document.write("<h2>" + arraryThree.pop() + "<h2>"); //  Output s "Printer"
document.write("<h2>" + arraryThree.pop() + "<h2>"); // Output s "Mouse"
document.write("<h2>" + arraryThree.pop() + "<h2>"); // Output  s "Keyboard"



// *****************   Question  15 **********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

var QuestionSeven;
document.write("<h1>QuestionFifteen:</h1 >");

document.write("<h2>Phone MenuFacturers</h2>");
document.write("<select>");

var phoneMenuFacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Infinix", "Sony"]

if (phoneMenuFacturers.length > 0) {
    document.write("<option>" + phoneMenuFacturers[0] + "</option>");
}
if (phoneMenuFacturers.length > 1) {
    document.write("<option>" + phoneMenuFacturers[1] + "</option>");
}
if (phoneMenuFacturers.length > 2) {
    document.write("<option>" + phoneMenuFacturers[2] + "</option>");
}
if (phoneMenuFacturers.length > 3) {
    document.write("<option>" + phoneMenuFacturers[3] + "</option>");
}
if (phoneMenuFacturers.length > 4) {
    document.write("<option>" + phoneMenuFacturers[4] + "</option>");
}
if (phoneMenuFacturers.length > 5) {
    document.write("<option>" + phoneMenuFacturers[5] + "</option>");
}

document.write("</select>");
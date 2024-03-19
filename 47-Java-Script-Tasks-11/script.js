// ******************* Declare and initialize an empty multidimensional array. (Array of arrays)*******************
var QuestionOne = "<h1>QuestionOne:</h1>";
document.write(QuestionOne);

var myArray = [];
for (var a = 0; a < 3; a++) {
    myArray[a] = [];
    document.write(myArray);
}

// ******************* Declare and initialize a multidimensional array representing the following matrix. *******************
var QuestionTwo = "<h1>QuestionTwo:</h1>";
document.write(QuestionTwo);

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 2],
];
for (var b = 0; b < 3; b++) {
    for (var c = 0; c < 4; c++) {
        document.write(matrix[b][c] + " ");
    }
    document.write("<br>");
}

// ******************* Write a program to print numeric counting from 1 to 10. *******************
var QuestionThree = "<h1>QuestionThree:</h1>";
document.write(QuestionThree);

for (var c = 1; c <= 10; c++) {
    document.write(c + "<br>");
}

// ******************* Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.: *******************
var QuestionFour = "<h1>QuestionFour:</h1>";
document.write(QuestionFour);

var tableNumber = prompt("Enter a number to show its multiplication table:");
var tableLenght = prompt("Enter the length  of the multiplication table:");

document.write("<h1>Multiplication Table of" + tableNumber + "</h1>");
for (var d = 1; d <= tableNumber; d++) {
    document.write(tableNumber + " x " + d + " = " + (tableNumber * d) + "<br>");
}

// *******************Write a program to print items of the following array using for loop: *******************
var QuestionFIve = "<h1>QuestionFIve:</h1>";
document.write(QuestionFIve);

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var e = 0; e < fruits.length; e++) {
    document.write(fruits[e] + "<br>");
}
var fruitsArrary = ["Element at index 0 Apple", "Element at index 1 Banana", "Element at index 2 Mango", "Element at index 3 Orange", "Element at index 4 Strawberry"];
for (var f = 0; f < fruitsArrary.length; f++) {
    document.write(fruitsArrary[f] + "<br>");
}

// *******************Generate the following series in your browser. See example output. *******************
var QuestionSix = "<h1>QuestionSix:</h1>";
document.write(QuestionSix);

var countingOne = "<h2>Counting</h2>";
document.write(countingOne);
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
for (var g = 1; g <= 15; g++) {
    document.write(g + ",");
}

var ReverseCounting = "<h2>Reverse Counting</h2>";
document.write(ReverseCounting);
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
for (var h = 10; h >= 1; h--) {
    document.write(h + ",");
}

var evenCounting = "<h2>Even Counting</h2>";
document.write(evenCounting);
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ",");
}

var oddCounting = "<h2>Odd Counting</h2>";
document.write(oddCounting);
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
for (var j = 1; j <= 19; j += 2) {
    document.write(j + ",");
}

var seriesCounting = "<h2>Series Counting</h2>";
document.write(seriesCounting);
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
for (var k = 2; k <= 20; k += 2) {
    document.write(k + "K, ");
}

// *******************Generate the following series in your browser. See example output. *******************
var QuestionSeven = "<h1>QuestionSeven:</h1>";
document.write(QuestionSeven);

var bakery = ["cake", "applepie", "cookie", "chips", "patties",];

var userInput = prompt("Welcome to Pak Bakery What do you want to order on the menu we have; cake, applepie, cookie, chips, patties");

var found = bakery.includes(userInput);

if (found) {
    document.write("The item you requested " + userInput + " is  available iin our bakery ");
} else {
    document.write(" We are sorry " + userInput + " is not available in our bakery ");
}

// *******************Write a program to identify the largest number in the given array.. *******************
var QuestionEight = "<h1>QuestionEight:</h1>";
document.write(QuestionEight);

var l = [24, 53, 78, 91, 12];
var largestNum = l[0];

for (var m = 1; m < l.length; m++) {
    if (l[m] > largestNum) {
        largestNum = l[m];
    }
}
document.write(" The Largest number in the arrary is: " + largestNum);

// *******************Write a program to identify the largest number in the given array.. *******************
var QuestionNine = "<h1>QuestionNine:</h1>";
document.write(QuestionNine);

var n = [24, 53, 78, 91, 12];
var smallestNum = n[0];

for (var o = 1; o < n.length; o--) {
    if (n[o] < smallestNum) {
        smallestNum = n[o];
    }
}
document.write("The Smallest number is the Arrary is " + smallestNum);


// ******************* Write a program to print multiples of 5 ranging 1 to 100. *******************
var QuestionTen = "<h1>QuestionTen:</h1>";
document.write(QuestionTen);

for (var z = 5; z <= 100; z += 5) {
    document.write(z + ", ");
}















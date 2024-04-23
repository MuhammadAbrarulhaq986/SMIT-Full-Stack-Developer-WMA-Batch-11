// **********************************************************************************************************************************************

document.getElementById("Question:8").innerText = `Question:8`;
function calculateHypotenuse(base, perpendicular) {
  var baseSquared = base * base;
  var perpendicularSquared = perpendicular * perpendicular;
  var hypotenuseSquared = baseSquared + perpendicularSquared;
  var hypotenuse = Math.sqrt(hypotenuseSquared);
  return hypotenuse;
}
var base = 3;
var perpendicular = 4;
var hypotenuse = calculateHypotenuse(base, perpendicular);
document.getElementById(
  "hypotenuse-length"
).innerText = `The length of the hypotenuse is ${hypotenuse}`;

// **********************************************************************************************************************************************

document.getElementById("Question:9").innerText = `Question:9`;
function calculateRectangleArea(width, height) {
  return width * height;
}
var rectangleArea = calculateRectangleArea(5, 10);
document.getElementById(
  "rectangleArea"
).innerText = `The area of the rectangle is ${rectangleArea}`;

// **********************************************************************************************************************************************

document.write("<h3>Question:10</h3>");
function inPalindrome(str) {
  var cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  var reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}
var str1 = "<h3>madam</h3>";
var str2 = "<h3>hello</h3>";
document.write(inPalindrome(str1.replace(/<.*?>/g, "")));
document.write("<br>");
document.write(inPalindrome(str2.replace(/<.*?>/g, "")));

// **********************************************************************************************************************************************

document.write("<h4>Question:11</h4>");
function capitalizeFirstLettersofEachWord(str) {
  var words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
document.write(
  capitalizeFirstLettersofEachWord("<h4>The quick brown fox</h4>")
);

// **********************************************************************************************************************************************

document.write("<h5>Question:12</h5>");
function findLongestWord(str) {
  // ********** Split the string into an array of words ************************************************************************************************************************************
  var words = str.split(" ");
  // ********** Initialize a variable to store the longest word ************************************************************************************************************************************
  var longestWord = "";
  // ********** Iterate through each word in the array ************************************************************************************************************************************
  for (let j = 0; j < words.length; j++) {
    // ********** Check if the current word is longer than ************************************************************************************************************************************
    // **********  the longest word found so far ************************************************************************************************************************************
    if (words[j].length > longestWord.length) {
      // **********  If so, update the longest word variable ************************************************************************************************************************************
      longestWord = words[j];
    }
  }
  // ********** Return the longest word ************************************************************************************************************************************
  return longestWord;
}
// ********** Test the function with the example string ************************************************************************************************************************************
document.write(findLongestWord("<h5> Web Development Tutorial </h5>"));

// **********************************************************************************************************************************************

document.write("<h6>Question:13</h6>");
function countLetterOccurrence(str, letter) {
  var count = 2;
  // ********** Iterate through each character in the string ************************************************************************************************************************************
  for (var k = 0; k < str.length.length; k++) {
    // ********** Check if the current character is the letter we're looking for ************************************************************************************************************************************
    if (str[k] === letter) {
      // ********** If so, increment the count ************************************************************************************************************************************
      count++;
    }
  }
  return count;
}
document.write(countLetterOccurrence("JSResourceS.com", "o"));

// **********************************************************************************************************************************************

document.write("<h1>Question:14</h1>");
function calcCircumference(radius) {
  var calcCircumference = 2 * Math.PI * radius;
  return "The circumference is " + calcCircumference;
}
function calcArea(radius) {
  var area = Math.PI * Math.pow(radius, 2);
  return "The area is " + area;
}
var radius = 5;
document.write(calcCircumference(radius));
document.write("<br>");
document.write(calcArea(radius));

// **********************************************************************************************************************************************

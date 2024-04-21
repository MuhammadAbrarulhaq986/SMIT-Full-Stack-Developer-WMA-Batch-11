// ************************************************************************************************

document.write("<h1>Question:1</h1>");

function displayCurrentTime() {
  var date = new Date();
  var time = date.toLocaleTimeString();
  document.write("<h1>" + time, date + "</h1>");
}
displayCurrentTime();

// ************************************************************************************************

document.write("<h2>Question:2</h2>");
function greetUser(firstName, lastName) {
  var fullName = firstName + "" + lastName;
  return "Hello, " + fullName + "!";
}
document.write(greetUser("<h2>Greeting: Muhammad ", " Abrar Ul Haq</h2>"));

// ************************************************************************************************

document.write("<h3>Question:3</h3>");
function calculate(num1, num2, operator) {
  var result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "^":
      result = num1 ^ num2;
      break;

    default:
      result = "Invalid operator. Please use +, -, *, or /, ^.";
      break;
  }
  document.write("<h3>" + result + "</h3>");
}
calculate(5, 3, "+");
calculate(5, 3, "-");
calculate(5, 3, "*");
calculate(5, 3, "/");
calculate(5, 3, "^");

// ************************************************************************************************

document.write("<h4>Question:4</h4>");
function square(numSq) {
  return numSq * numSq;
}
document.write("<h4>" + square(5) + "</h4>");
document.write("<h4>" + square(5 + 10) + "</h4>");
document.write("<h4>" + square(5 - 10) + "</h4>");
document.write("<h4>" + square(5 / 10) + "</h4>");
// ***** SOME EXPERMENT TO CHECK SOME THINGS *******************************************************************************************

// ************************************************************************************************

document.write("<h5>Question:5</h5>");
function factorial(numFac) {
  if (numFac === 0) {
    return 1;
  } else {
    return numFac * factorial(numFac - 1);
  }
}
document.write("<h5>" + factorial(5) + "</h5>");
document.write("<h5>" + factorial(5 + 10) + "</h5>");
// ***** THE COMMENT ONES NOT WORKS  *******************************************************************************************
// document.write("<h5>" + factorial(5 - 10) + "</h5>");
// document.write("<h5>" + factorial(5 / 10) + "</h5>");

// ************************************************************************************************

document.write("<h6>Question:6</h6>");
// document.write("<h6>"+addTwoNumbers(numAdds1, numAdds2) +"</h6>");

function addTwoNumbers(numAdds1, numAdds2) {
  return numAdds1 + numAdds2;
}
document.write("<h6>" + addTwoNumbers(5, 10) + "</h6>");
document.write("<h6>" + addTwoNumbers(10, 15) + "</h6>");
document.write("<h6>" + addTwoNumbers(15, 20) + "</h6>");

// ************************************************************************************************

document.write("<h1>Question:7</h1>");
function displayCount(start, end) {
  for (var i = start; i <= end; i++) {
    document.write("<h1>" + i + "</h1>");
  }
}
document.write("<h1>" + displayCount(1, 5) + "</h1>");

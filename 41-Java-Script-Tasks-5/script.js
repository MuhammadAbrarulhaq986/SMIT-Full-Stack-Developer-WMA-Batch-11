// ********************************* E-commerce website ***********************************************************************************************
// Ask the user what they are buying
document.write("<h1>E-commerce </h1>");
var item1Name = prompt("What is the name of Item Shirt");
var item1Price = parseFloat(prompt(" The price of One Shirt is 100. How many  do you want?", "100"));
var item1Quantity = parseInt(prompt("How many Shirts do you want?", "1"));

var item2Name = prompt("What is the name of Item T-Shirt");
var item2Price = parseFloat(prompt("The price of One T-Shirt is 200. How many  do you want?", "200"));
var item2Quantity = parseInt(prompt("Which Brand are you Looking for ?", "1"));

// Calculate the cost of each item
var item1Cost = item1Price * item1Quantity;
var item2Cost = item2Price * item2Quantity;

// Calculate the shopping rate
var shoppingRate = 500;

// Calculate the total cost
var totalCost = item1Cost + item2Cost + shoppingRate;

// Display the receipt
document.write("<h1>Receipt</h1>");
document.write("<p>Price of " + item1Name + ": $" + item1Price.toFixed(2) + "</p>");
document.write("<p>Quantity of " + item1Name + ": " + item1Quantity + "</p>");
document.write("<p>Price of " + item2Name + ": $" + item2Price.toFixed(2) + "</p>");
document.write("<p>Quantity of " + item2Name + ": " + item2Quantity + "</p>");
document.write("<p>Shopping Cost: $" + shoppingRate + "</p>");
document.write("<p>Total Cost of your order is: $" + totalCost.toFixed(2) + "</p>");
document.write("Thank You For Shopping!");
// ********************************* E-commerce website Completed ***********************************************************************************************


// ********************************* Marks Sheet Calculator ***********************************************************************************************
document.write("<h1>Marks Sheet</h1>");
// Define the total marks
var totalMarks = 500;
// Ask the user for the obtained marks
var obtainedMarks = prompt("Enter your Total Marks");
// var obtainedMarks = prompt("Enter your Total Marks");
var percentage = obtainedMarks / totalMarks;
var totalPercentage = percentage * 100;
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Obtained Marks: " + obtainedMarks + "</p>");
document.write("<p>Percentage:" + totalPercentage + "</p>");
// ********************************* Marks Sheet Calculator Completed ***********************************************************************************************

// ********************************* Currency Exchanger ***********************************************************************************************
document.write("<h1>Currency Exchanger</h1>");
// Define the exchange rate from Riyals to Dollars
var rupeeToDollarRate = 283;

// Ask the user for the amount in Riyals
var amountInRupee = prompt("Enter the amount in Rupee");

// Convert the amount to a number
var amountInDollars = parseFloat(amountInRupee) * rupeeToDollarRate;

// Display the results
document.write("<p>Amount in Rupee: " + amountInRupee);
document.write("<p>Amount in Dollars: " + amountInDollars.toFixed(2));
// ********************************* Currency Exchanger Completed ***********************************************************************************************

// ********************************* Age Calculator  ***********************************************************************************************
document.write("<h1>Age Calculator </h1>");
var birthYear = 1990;
var currentYear = 2024;
var age = currentYear - birthYear;
document.write("<p>Current Year:" + currentYear + "</p>");
document.write("<p>Birth Year:" + birthYear + "</p>");
document.write("<p>Age:" + age + "</p>");
// ********************************* Age Calculator Completed ***********************************************************************************************

// ********************************* The Geometrizer ***********************************************************************************************

// Prompt the user for the radius of the circle
document.write("<h1>The Geometrizer </h1>");
var radius = prompt("Enter the radius of the circle:");

// Convert the input to a number
radius = parseFloat(radius);

// Calculate the circumference
var circumference = 2 * Math.PI * radius;

// Calculate the area
var area = Math.PI * Math.pow(radius, 2);

// Display the result
document.write("<p>Radius: " + radius + "</p>");
document.write("<p>Circumference: " + circumference.toFixed(2) + "</p>");
document.write("<p>Area: " + area.toFixed(2) + "</p>");
// ********************************* The Geometrizer Completed ***********************************************************************************************

// ********************************* The LifeTime Supply Calculator***********************************************************************************************
document.write("<h1>The Life Time Supply Calculator </h1>");
var favouriteSnack = "potatoFry";
var lifeTimeAge = 20;
var maximumLifeTimeAge = 60;
var perdayPercentage = 5;
var totalPotatoFry = 10 * perdayPercentage;
document.write("<p> Favourite Snack: " + favouriteSnack + "</p>");
document.write("<p> Current Age:" + lifeTimeAge + "</p>");
document.write("<p> Maximum Life Time Age:" + maximumLifeTimeAge + "</p>");
document.write("<p> Per Day Percentage:" + perdayPercentage + "</p>");
document.write("<p>You Will Need  " + totalPotatoFry + " this much PotatoFry to last until you retire </p>");
// ********************************* The LifeTime Supply CalculatorCompleted ***********************************************************************************************

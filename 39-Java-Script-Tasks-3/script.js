// *********** Qiestion: 1  ************************************************************************************************************
//this statement will print the string "The sum of 3 and 5 is" followed by the result of adding 3 and 5
var Plus = " The Sum of 5 and 10 is " + (5 + 15);
document.write(Plus + " <br>");
console.log(Plus);

var Minus = " The subtraction of 15 and 10 is " + (15 - 10);
document.write(Minus + " <br>");
console.log(Minus);

var Multiply = " The multiplication of 5 and 100 is " + (5 * 100);
document.write(Multiply + " <br>");
console.log(Multiply);

var Division = " The subtraction of 20 and 10 is " + (20 / 10);
document.write(Division + " <br>");
console.log(Division);
// *********** Qiestion: 2  and   3 ************************************************************************************************************
var First = "  Value after variable declaration is: ??. ";
document.write(First + " <br>");
console.log(First);

var Second = "  Initial value: 5 ";
document.write(Second + " <br>");
console.log(Second);
// Increment
var countOne = 5;
document.write(countOne + " - Initial value <br>");
document.write("Incrementing the value to: " + (countOne++) + " <br>");
document.write("Value after incrementing: " + countOne + " <br>");

var countOne = 5;
document.write(countOne + " - Initial value <br>");
document.write("Incrementing the value to: " + (++countOne) + " <br>");
document.write("Value after incrementing: " + countOne + " <br>");

//  Decrement
var countTwo = 5;
document.write(countTwo + " - Initial value <br>");
document.write("Decrementing the value to: " + (countTwo--) + " <br>");
document.write("Value after Decrementing: " + countTwo + " <br>");
var countTwo = 5;

document.write(countTwo + " - Initial value <br>");
document.write("Decrementing the value to: " + (--countTwo) + " <br>");
document.write("Value after Decrementing: " + countTwo + " <br>");

// Remainder
var countThree = 89;
document.write(countThree + " - Initial value <br>");
document.write("Remainder after dividing by 5: " + (countThree % 2) + " <br>");
// *********** Qiestion: 4  ************************************************************************************************************

//  Ask the user for the number of tickets
var numTickets = prompt("Enter the number of tickets you want to buy.")

//  Convert the user input to a number
numTickets = Number(numTickets);

// Calculate the total cost
var ticketPrice = 600;  // Cost of one movie ticket in PKR
var totalCost = ticketPrice * numTickets;//  Calculate the cost of buying  { numTicket } tickets


//  Display the result
document.write(" the cost of buying  " + numTickets + " tickets is  " + totalCost + " PKR <br> ")
console.log(" the cost of buying  " + numTickets + " tickets is  " + totalCost + " PKR <br>  ");
//  Display the result  using an result
alert(" the cost of buying " + numTickets + " tickets is " + totalCost + " PKR  ");

// *********** Qiestion: 5  ************************************************************************************************************


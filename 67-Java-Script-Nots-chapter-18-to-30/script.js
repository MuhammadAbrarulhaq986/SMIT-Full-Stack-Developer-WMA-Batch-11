



// var cleanestCities = ["Karachi", "Islamabad", "Lahore", "Quetta", "Peshawar"];

// var cityToCheck = prompt("Enter a city to check if it's one of the cleanest cities: Karachi, Islamabad, Lahou, Quetta, Peshawar").toLowerCase();

// for (let i = 0; i <= 4; i++) {

//     if (cityToCheck === cleanestCities[0].toLowerCase()) {
//         alert("It's one of the cleanest cities");//     }
//     else if (cityToCheck === cleanestCities[1].toLowerCase()) {
//         alert("It's one of the cleanest cities");
//     }
//     else if (cityToCheck === cleanestCities[2].toLowerCase()) {
//         alert("It's one of the cleanest cities");
//     }
//     else if (cityToCheck === cleanestCities[3].toLowerCase()) {
//         alert("It's one of the cleanest cities");
//     }
//     else if (cityToCheck === cleanestCities[4].toLowerCase()) {
//         alert("It's one of the cleanest cities");
//     }
//     else {
//         alert("It's not on the list");
//     }
// }

// var cleanestCities = ["Karachi", "Islamabad", "Lahore", "Quetta", "Peshawar"];

// var cityToCheck = prompt("Enter a city to check if it's one of the cleanest cities: Karachi, Islamabad, Lahore, Quetta, Peshawar").toLowerCase();

// for (let i = 0; i <= 4; i++) {

//     if (cityToCheck === cleanestCities[0].toLowerCase()) {
//         alert("It's one of the cleanest cities");
//         break;
//     }
//     else if (cityToCheck === cleanestCities[1].toLowerCase()) {
//         alert("It's one of the cleanest cities");
//         break;

//     }
//     else if (cityToCheck === cleanestCities[2].toLowerCase()) {
//         alert("It's one of the cleanest cities");
//         break;

//     }
//     else if (cityToCheck === cleanestCities[3].toLowerCase()) {
//         alert("It's one of the cleanest cities");
//         break;

//     }
//     else if (cityToCheck === cleanestCities[4].toLowerCase()) {
//         alert("It's one of the cleanest cities");
//         break;

//     }
//     else {
//         alert("It's not on the list");
//         break;

//     }
// }


// //* Define an array of cleanest cities in Pakistan
// var cleanestCities = ["Karachi", "Islamabad", "Lahore", "Quetta", "Peshawar"];

// //* Prompt the user to enter a city to check if it's one of the cleanest cities
// var cityToCheck = prompt("Enter a city to check if it's one of the cleanest cities: Karachi, Islamabad, Lahore, Quetta, Peshawar ").toLowerCase();

// //* Initialize a flag to indicate if a match is found
// var matchFound = "no";

// //* Loop through the cleanestCities array to check if the user's input matches any of the cities
// for (var i = 0; i < cleanestCities.length; i++) {
//     //* Check if the user's input matches the current city in the array (case-insensitive
//     if (cityToCheck === cleanestCities[i].toLowerCase()) {
//         //* If a match is found, set the flag to "yes" and display an alert
//         matchFound = "yes";
//         alert("It's one of the cleanest cities");
//         //* Break out of the loop since we've found a match
//         break;
//     }
//     //* If the flag is still "no" after the loop, it means no match was found
//     else if (matchFound === "no") {
//         //* Display an alert to indicate that the city is not on the list
//         alert("It's not on the list");
//     }
// }


// //* Define an array of cleanest cities in Pakistan
// var cleanestCities = ["Karachi", "Islamabad", "Lahore", "Quetta", "Peshawar"];

// //* Prompt the user to enter a city to check if it's one of the cleanest cities
// var cityToCheck = prompt("Enter a city to check if it's one of the cleanest cities: Karachi, Islamabad, Lahore, Quetta, Peshawar ").toLowerCase();

// //* Initialize a flag to indicate if a match is found
// var matchFound = false;

// //* Loop through the cleanestCities array to check if the user's input matches any of the cities
// for (var i = 0; i <= 4; i++) {
//     //* Check if the user's input matches the current city in the array (case-insensitive)
//     if (cityToCheck === cleanestCities[i].toLowerCase()) {
//         //* If a match is found, set the flag to true and display an alert
//         matchFound = true;
//         alert("It's one of the cleanest cities");
//         //* Break out of the loop since we've found a match
//         break;
//     }
// }

// //* If the flag is still false after the loop, it means no match was found
// if (!matchFound) {
//     //* Display an alert to indicate that the city is not on the list
//     alert("It's not on the list");
// }



// //* Define an array of cleanest cities in Pakistan
// var cleanestCities = ["Karachi", "Islamabad", "Lahore", "Quetta", "Peshawar"];

// //* Prompt the user to enter a city to check if it's one of the cleanest cities
// var cityToCheck = prompt("Enter a city to check if it's one of the cleanest cities: Karachi, Islamabad, Lahore, Quetta, Peshawar ").toLowerCase();

// //* Initialize a flag to indicate if a match is found (Boolean value: false)
// var matchFound = false;

// //* Get the number of elements in the cleanestCities array
// var numElements = cleanestCities.length;

// //* Loop through the cleanestCities array to check if the user's input matches any of the cities
// for (var i = 0; i < numElements; i++) {
//     //* Check if the user's input matches the current city in the array (case-insensitive)
//     if (cityToCheck === cleanestCities[i].toLowerCase()) {
//         //* If a match is found, set the flag to true (Boolean value: true) and display an alert
//         matchFound = true;
//         alert("It's one of the cleanest cities");
//         //* Break out of the loop since we've found a match
//         break;
//     }
// }

// //* If the flag is still false after the loop, it means no match was found (Boolean value: false)
// if (!matchFound) {
//     //* Display an alert to indicate that the city is not on the list
//     alert("It's not on the list");
// }




// //* Define an array of first names
// var firstNames = ["Abrar ", "Johan ", "Gojo ", "Naruto ", "Sitama "];

// //* Define an array of last names
// var lastNames = ["Zzz ", "Burp ", "Dogbone ", "Droop "];

// //* Initialize an empty array to store full names
// var fullNames = [];

// //* Loop through each first name
// for (var i = 0; i < firstNames.length; i++) {
//     //* Loop through each last name
//     for (var j = 0; j < lastNames.length; j++) {
//         //* Combine the current first name and last name, and add to the fullNames array
//         fullNames.push(firstNames[i] + lastNames[j]);
//     }
// }

// //* Log the resulting fullNames array to the console
// console.log(fullNames);

// //* Write the fullNames array to the HTML document
// document.write(fullNames);

// //* Duplicate code (remove this section)
// //* Define an array of first names (again)
// var firstNames = ["Abrar ", "Johan ", "Gojo ", "Naruto ", "Sitama "];

// //* Define an array of last names (again)
// var lastNames = ["Zzz ", "Burp ", "Dogbone ", "Droop "];

// //* Initialize an empty array to store full names (again)
// var fullNames = [];

// //* Loop through each first name (again)
// for (var i = 0; i < firstNames.length; i++) {
//     //* Loop through each last name (again)
//     for (var j = 0; j < lastNames.length; j++) {
//         //* Combine the current first name and last name, and add to the fullNames array (again)
//         fullNames.push(firstNames[i] + lastNames[j]);
//     }
// }

// //* Log the resulting fullNames array to the console (again)
// console.log(fullNames);

// //* Write the fullNames array to the HTML document (again)
// document.write(fullNames);



// //* Define an array of first names
// var firstNames = ["Abrar ", "Johan ", "Gojo ", "Naruto ", "Sitama "];

// //* Define an array of last names
// var lastNames = ["Zzz ", "Burp ", "Dogbone ", "Droop "];

// //* Initialize an empty array to store full names
// var fullNames = [];

// //* Loop through each first name and last name, and combine them
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]);
//     }
// }

// //* Log and write the resulting fullNames array
// console.log(fullNames);
// // document.write(fullNames);



// //* */ Prompt the user to enter their city
// var cityToCheck = prompt("Enter your city: Karachi, Islamabad, Lahore, Quetta, Peshawar");

// //* */ Convert the user's input to lowercase to make the comparison case-insensitive
// cityToCheck = cityToCheck.toLowerCase();

// //* */ Define an array of cleanest cities
// var cleanestCities = ["karachi", "islamabad", "lahore", "quetta", "peshawar"];

// //* */ Loop through the array of cleanest cities
// for (var i = 0; i < cleanestCities.length; i++) {
//     //* */ Check if the user's input matches t,he current city in the array
//     if (cityToCheck === cleanestCities[i]) {
//         //* */ If it matches, alert that it's one of the cleanest cities
//         alert("It's one of the cleanest cities");
//         //* */ Break out of the loop since we've found a match
//         break;
//     }
// }

// //* */ If the loop completes without finding a match, alert that it's not on the cleanest cities list
// if (i === cleanestCities.length) {
//     alert("It's not on the cleanest cities list");
// }



// //* */ Prompt the user to enter their city
// var cityToCheck = prompt("Enter your city: Karachi, Islamabad, Lahore, Quetta, Peshawar");

// //* */ Convert the user's input to lowercase to make the comparison case-insensitive
// cityToCheck = cityToCheck.toLowerCase();

// //* */ Define an array of cleanest cities
// var cleanestCities = ["karachi", "islamabad", "lahore", "quetta", "peshawar"];


// //* */ Loop through the array of cleanest cities
// for (var i = 0; i < cleanestCities.length; i++) {
//     //* */ Check if the user's input matches t,he current city in the array
//     if (cityToCheck === cleanestCities[i]) {
//         //* */ If it matches, alert that it's one of the cleanest cities
//         alert("It's one of the cleanest cities");
//         //* */ Break out of the loop since we've found a match
//         break;
//     }
// }


// //* Prompt the user to enter a city
// var cityToCheck = prompt("Enter a city: ");

// //* Convert the user's input to lowercase to make the comparison case-insensitive
// cityToCheck = cityToCheck.toLowerCase();

// //* Define an array of cleanest cities
// var cleanestCities = ["karachi", "islamabad", "lahore", "quetta", "peshawar"];

// //* Check if the user's input is in the array of cleanest cities
// for (var i = 0; i < cleanestCities.length; i++) {
//     //* Check if the user's input matches the current city in the array
//     if (cityToCheck === cleanestCities[i]) {
//         //* If it matches, alert that it's one of the cleanest cities
//         alert("It's one of the cleanest cities");
//         //* Break out of the loop since we've found a match
//         break;
//     }
// }

// //* If the loop completes without finding a match, alert that it's not on the cleanest cities list
// if (i === cleanestCities.length) {
//     alert("It's not on the cleanest cities list");
// }

// //* Copy the first character of the string using slice
// var firstChar = cityToCheck.slice(0, 1);

// //* Display the result
// alert("The first character of the city is: " + firstChar);

// //* Note that the original value of cityToCheck doesn't change
// alert("The original city is still: " + cityToCheck);


// //* Prompt the user to enter their city and convert the input to lowercase
// var cityToCheck = prompt("Enter your city: Karachi, Islamabad, Lahore, Quetta, Peshawar").toLowerCase();

// //* Define an array of cleanest cities
// var cleanestCities = ["karachi", "islamabad", "lahore", "quetta", "peshawar"];

// //* Check if the user's input is in the array of cleanest cities
// for (var i = 0; i < cleanestCities.length; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         //* If it is, alert that it's one of the cleanest cities
//         alert("It's one of the cleanest cities");

//         //* Extract the first character of the city using the slice method
//         var firstChar = cityToCheck.slice(0, 1);

//         //* Alert the first character of the city
//         alert("The first character of the city is: " + firstChar);
//         break;
//     }
// }

// //* If the loop completes without finding a match, alert that it's not on the cleanest cities list
// if (i === cleanestCities.length) {
//     alert("It's not on the cleanest cities list");
// }


// //* Prompt the user to enter their city and convert the input to lowercase
// var cityToCheck = prompt("Enter your city: Karachi, Islamabad, Lahore, Quetta, Peshawar").toLowerCase();

// //* Define an array of cleanest cities
// var cleanestCities = ["karachi", "islamabad", "lahore", "quetta", "peshawar"];

// //* Check if the user's input is in the array of cleanest cities
// for (var i = 0; i < cleanestCities.length; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         //* If it is, alert that it's one of the cleanest cities
//         alert("It's one of the cleanest cities");

//         //* Extract the first character of the city using the slice method
//         var firstChar = cityToCheck.slice(0, 1);

//         //* Extract the rest of the characters of the city using the slice method
//         var otherChars = cityToCheck.slice(1);

//         //* Capitalize the first character
//         firstChar = firstChar.toUpperCase();

//         //* Lowercase the rest of the characters
//          otherChars = otherChars.toLowerCase();

//         //* Concatenate the capitalized first character and the lowercased rest of the characters
//         var cappedCity = firstChar + otherChars;

//         //* Alert the first character of the city
//         alert("The first character of the city is: " + firstChar);

//         //* Alert the city with the first character capitalized
//         alert("The city with the first character capitalized is: " + cappedCity);

//         break;
//     }
// }

// //* If the loop completes without finding a match, alert that it's not on the cleanest cities list
// if (i === cleanestCities.length) {
//     alert("It's not on the cleanest cities list");
// }



// //* Get the month from the user
// var month = prompt("Enter a month");

// // *Abbreviate the month if it's more than 3 characters long
// var monthAbbrev = month.substring(0, 3);

// //* Get the text from the user
// var str = prompt("Enter some text");

// //* Check for double spaces in the text
// for (var i = 0; i < str.length; i++) {
//     if (str.charAt(i) === " " && str.charAt(i + 1) === " ") {
//         alert("Double spaces found!");
//         break;
//     }
// }

// console.log(monthAbbrev);
// console.log(str);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// //* Assign the paragraph to the variable text
// let text =
//     "The New Yorker magazine doesn't allow the phrase 'World War II.' They say it should be 'the Second World War'. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers. It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his. ";

// //* Loop through the string character by character
// for (var i = 0; i < text.length; i++) {
//     //* Check if the 12-character sequence starting at index i is "World War II"
//     if (text.slice(i, i + 12) === "World War II") {
//       //* If it is, replace it with "the Second World War"
//       text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
//   }

//   // //* Output the updated text
// document.write(text);

// //* Assign the paragraph to the variable text
// let text =
//   "The New Yorker magazine doesn't allow the phrase 'World War II.' They say it should be 'the Second World War'. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers. It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his. ";

// //* Use the indexOf method to find the index of the first occurrence of "World War II" in the text
// let firstChar = text.indexOf("World War II");

// //* If the phrase "World War II" is found, replace it with "the Second World War"
// if (firstChar !== -1) {
//   //* Slice the text into three parts: before the banned phrase, the banned phrase itself, and after the banned phrase
//   text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// }

// //* Output the updated text
// document.write(text);
// ********************************************************************************
// //* The indexOf method returns the index of the first occurrence of a specified value in a string.

// //* Example:
// var text = "Hello World, Hello Universe!";
// var searchValue = "Hello";

// //* Use the indexOf method to find the index of the first occurrence of "Hello" in the text
// var index = text.indexOf(searchValue);

// //* Output the result
// console.log("The index of \"" + searchValue + "\" is " + index); //* Output: The index of "Hello" is 0

// //* If the value is not found, indexOf returns -1
// var notFoundValue = "Goodbye";
// var notFoundIndex = text.indexOf(notFoundValue);

// console.log("The index of \"" + notFoundValue + "\" is " + notFoundIndex); //* Output: The index of "Goodbye" is -1


// ********************************************************************************

// var text = "Hello World, Hello Universe!";
// var searchValue = "Hello";

// //* Use the lastIndexOf method to find the index of the last occurrence of "Hello" in the text
// var lastIndex = text.lastIndexOf(searchValue);

// //* Output the result
// console.log("The last index of \"" + searchValue + "\" is " + lastIndex); //* Output: The last index of "Hello" is 13

// //* If the value is not found, lastIndexOf returns -1
// var notFoundValue = "Goodbye";
// var notFoundIndex = text.lastIndexOf(notFoundValue);

// console.log("The last index of \"" + notFoundValue + "\" is " + notFoundIndex);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var firstName = "Abrar";
// var lastName = "ul haq";
// console.log(firstName , lastName);

// var firstChar = firstName.slice(0, 1);
// console.log(firstChar);

// var firstChar = firstName.charAt(0)
// console.log(firstChar);


// var firstName = "Abrar";
// var lastName = "ul haq";
// console.log(firstName , lastName);

// //* Define a string variable
// var name = "Abrar ul haq";

// //* Get the last character of the string
// var lastChar = name.charAt(name.length - 1);

// //* Print the result to the console
// console.log("The last character of the string is:", lastChar);


// //* Define the text to search for exclamation points
// const text = "Hello! World!";

// //* Loop through each character in the text
// for (let i = 0; i < text.length; i++) {
//   //* Check if the current character is an exclamation point
//   if (text[i] === "!") {
//     //* If an exclamation point is found, alert the user
//     alert("Exclamation point found at index " + i);
//     //* Stop searching the rest of the text
//     break;
//   }
// }


// //* Define the text to search for exclamation points
// const text = "Hello! World!";

// //* Loop through each character in the text
// for (let i = 0; i < text.length; i++) {
//   //* Check if the current character is an exclamation point
//   if (text[i] === "!") {
//     //* If an exclamation point is found, alert the user
//     alert("Exclamation point found at index " + i);
//   }
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// let text =
//     "The New Yorker magazine doesn't allow the phrase 'World War II.' They say it should be 'the Second World War'. So let's search the following sentence for the banned characters and replace them with 'World War II.'the phrase that the New Yorker prefers. It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his. ";

// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, 1) + "the Second World War" + text.slice(i + 12);
//     }
// }
// document.write(text)


// let text =
//     "The New Yorker magazine doesn't allow the phrase 'World War II.' They say it should be 'the Second World War'. So let's search the following sentence for the banned characters and replace them with 'World War II.'the phrase that the New Yorker prefers. It is startling to think that, even in the darkest depths of 'World War II.' J. R. R. Tolkien was writing the trilogy, 'World War II.' which contains, with the weird applicability available only to poetry and myth, 'World War II.' the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his. ";

//     var firstChar = text.indexOf("World War II");
//  if (firstChar !== -1) {
//  text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
//  }

// document.write(text);

// var text =
//     "The New Yorker magazine doesn't allow the phrase 'World War II.' They say it should be 'the Second World War'. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers. It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his. ";



// text = text.replace("World War II", "the Second World War")

// document.write(text);

// var text =
//     "The New Yorker magazine doesn't allow the phrase 'World War II.' They say it should be 'the Second World War'. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers. It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy World War II, which contains, with the weird applicability available only to poetry and myth World War II, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his. ";



// var newText = text.replace(/World War II/g, "the Second World War");

// document.write(newText);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//* Example of using Math.round() to round a number to the nearest integer

//* Define a decimal number
// let decimalNumber = 4.7;

// //* Use Math.round() to round the number to the nearest integer
// let roundedNumber = Math.round(decimalNumber);

// //* Log the result to the console
// console.log("The rounded number is: " + roundedNumber);
//* Output: The rounded number is: 5
// roundedNumber = Math.round(roundedNumber);

// console.log(roundedNumber);


// //* Another example with a negative number
// let negativeDecimalNumber = -3.4;

// //* Use Math.round() to round the number to the nearest integer
// let roundedNegativeNumber = Math.round(negativeDecimalNumber);

// //* Log the result to the console
// console.log("The rounded negative number is: " + roundedNegativeNumber); //* Output: The rounded negative number is: -3



// //*  Declare a variable to store a decimal number
// let decimalNumber = .023415789;

// //*  Use Math.ceil() to round the decimal number up to the nearest integer
// let roundedNumber = Math.ceil(decimalNumber);

// //* Log the result to the console
// console.log("The rounded number is: " + roundedNumber);


// //* Declare a variable to store a decimal number close to 1
// let decimalNumber = 0.99999999;

// //* Use the Math.floor() function to round the decimal number down to the nearest whole number
// let roundedNumber = Math.floor(decimalNumber);

// //* Log the result to the console
// console.log("The rounded number is: " + roundedNumber);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // //* Generate a random number between 0 and 1
// var randomNumber = Math.random();
// console.log(randomNumber); //* Output: a random floating-point number between 0 and 1, e.g. 0.8123

// * Generate a random integer between 1 and 10
// var randomNumber = Math.floor(randomNumber * 10) + 1;
// console.log(randomNumber); //* Output: a random integer between 1 and 10, e.g. 8

// //* Generate a random integer between 50 and 100
// var randomNumber = Math.floor(randomNumber * 51) + 50;
// console.log(randomNumber); //* Output: a random integer between 50 and 100, e.g. 73

// //* Generate a random boolean value (true or false)
// var randomNumber = randomNumber < 0.5;
// console.log(randomNumber); //* Output: a random boolean value, e.g. true

//* Generate an array of 5 random integers between 1 and 100
// var randomNumber = Math.random();

// var randomArray = [];
// for (let i = 0; i < 5; i++) {
//     var randomNumber = Math.random();
//     randomArray.push(Math.floor(randomNumber * 100) + 1);
// }
// console.log(randomArray); //* Output: an array of 5 random integers, e.g. [14, 73, 28, 42, 91]

// // *Generate a random number within a specific range (e.g. 200 to 300)
// var randomNumber = Math.random();
// var min = 100;
// var max = 300;
// var randomNumber = Math.floor(randomNumber * (max - min + 1)) + min;
// console.log(randomNumber); //* Output: a random integer between 200 and 300, e.g. 247

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// //* Converting Strings to Integers

// //* Example 1: Converting a string to an integer using parseInt()
// var stringValue = "123"; //* Define a string variable
// var integerValue = parseInt(stringValue); //* Use parseInt() to convert the string to an integer
// console.log(integerValue); //* Output: 123

// //* Example 2: Converting a string to an integer using Number()
// var stringValue = "456"; //* Define a string variable
// var integerValue = Number(stringValue); //* Use Number() to convert the string to an integer
// console.log(integerValue); //* Output: 456

// //* Example 3: Converting a string to an integer using the unary plus operator (+)
// var stringValue = "789"; //* Define a string variable
// var integerValue = +stringValue; //* Use the unary plus operator (+) to convert the string to an integer
// console.log(integerValue); //* Output: 789

// //* Example 4: Converting a string to an integer with a radix (base)
// var stringValue = "A2"; //* Define a string variable in hexadecimal format
// var integerValue = parseInt(stringValue, 16); //* Use parseInt() with a radix of 16 to convert the string to an integer
// console.log(integerValue); //* Output: 162

// ********************************************************************************************* **********************************************************************************************

// //*  Converting Strings to Decimals
// //*  Example 1: Converting a string to a decimal using parseFloat()
// var stringValue = "12.34";
// //*  Define a string variable
// var decimalValue = parseFloat(stringValue);
// //*  Use parseFloat() to convert the string to a decimal
// console.log(decimalValue);
// //*  Output: 12.34

// //*  Example 2: Converting a string to a decimal using Number()
// var stringValue = "56.78";
// //*  Define a string variable
// var decimalValue = Number(stringValue);
// //*  Use Number() to convert the string to a decimal
// console.log(decimalValue);
// //*  Output: 56.78

// //*  Example 3: Converting a string to a decimal using the unary plus operator (+)
// var stringValue = "90.12";
// //* Define a string variable
// var decimalValue = +stringValue;
// //*  Use the unary plus operator (+) to convert the string to a decimal
// console.log(decimalValue);
// //*  Output: 90.12

// ********************************************************************************************* **********************************************************************************************

// //* Error Handling
// //* Example: Converting a string to an integer with error handling
// var stringValue = "abc"; //* Define a string variable that cannot be converted to an integer
// var integerValue = parseInt(stringValue); //* Try to convert the string to an integer
// if (isNaN(integerValue)) { //* Check if the conversion failed
//     console.log("Error: Cannot convert string to integer."); //* Output an error message
// } else {
//     console.log("Integer value: " + integerValue); //* Output the converted integer value
// }
// // *Output: Error: Cannot convert string to integer.


// // *Example: Converting a string to a decimal with error handling
// var stringValue = "def"; //* Define a string variable that cannot be converted to a decimal
// var decimalValue = parseFloat(stringValue); //* Try to convert the string to a decimal
// if (isNaN(decimalValue)) { //* Check if the conversion failed
//     console.log("Error: Cannot convert string to decimal."); //* Output an error message
// } else {
//     console.log("Decimal value: " + decimalValue); //* Output the converted decimal value
// }
// //* Output: Error: Cannot convert string to decimal.

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//* Converting Strings to Numbers

//* Example 1: Converting a string to an integer using parseInt()

// const stringValue = "123";
// const integerValue = parseInt(stringValue);
// console.log(integerValue); //* Output: 123

// // *Example 2: Converting a string to a decimal using parseFloat()
// const stringValue = "12.34";
// const decimalValue = parseFloat(stringValue);
// console.log(decimalValue); // Output: 12.34

//  *Example 3: Converting a string to a number using the unary plus operator (+)*
// const stringValue = "45";
// const numberValueOne = +stringValue;
// console.log(numberValueOne); // Output: 45

// // * Example 4: Converting a string to a number using Number()
// const stringValue = "67.89";
// const numberValueTwo = Number(stringValue);
// console.log(numberValueTwo); // Output: 67.89

// ********************************************************************************************* **********************************************************************************************

//* Converting Numbers to Strings

// //* Example 1: Converting an integer to a string using toString()
// const integerValue = 123;
// const stringValue = integerValue.toString();
// console.log(stringValue); // Output: "123"


// // * Example 2: Converting a decimal to a string using toString()
// const decimalValue = 12.34;
// const stringValue = decimalValue.toString();
// console.log(stringValue); // Output: "12.34"

// // * Example 3: Converting a number to a string using string concatenation
// const numberValue = 45;
// const stringValue = "" + numberValue;
// console.log(stringValue); // Output: "45"

// // *Example 4: Converting a number to a string using String()
// const numberValue = 67.89;
// const stringValue = String(numberValue);
// console.log(stringValue); // Output: "67.89"

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!






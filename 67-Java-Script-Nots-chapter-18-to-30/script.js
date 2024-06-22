



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

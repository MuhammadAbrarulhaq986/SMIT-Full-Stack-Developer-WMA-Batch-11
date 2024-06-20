



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



//* Get the month from the user
var month = prompt("Enter a month");

// *Abbreviate the month if it's more than 3 characters long
var monthAbbrev = month.substring(0, 3);

//* Get the text from the user
var str = prompt("Enter some text");

//* Check for double spaces in the text
for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === " " && str.charAt(i + 1) === " ") {
        alert("Double spaces found!");
        break;
    }
}

console.log(monthAbbrev);
console.log(str);















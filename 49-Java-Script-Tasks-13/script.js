// *******************************************************************************************

document.write("<h1>Question:13</h1>");
var username = prompt("Please enter a username:");
if (/[!@.,0-9]/.test(username)) {
    document.write("<h1>Please enter a valid username. The username cannot contain any of the following special symbols:!@.,</h1>");
} else {
    var validUsername = username;
    document.write("<h1>Valid username: " + validUsername + "</h1>");
}

// *******************************************************************************************

document.write("<h2>Question:14</h2>");
var bakers = ["cake", "apple pie", "cookie", "chips", "patties"];
var itemToFind = prompt("Please enter an item to search: cake, apple pie, cookie, chips, patties");
var result = bakers.includes(itemToFind.toLocaleLowerCase());
document.write(result ? "<h2>The item is found in the list.</h2>" : "<h2>The item is not found in the list.</h2>");

// *******************************************************************************************

document.write("<h3>Question:15</h3>");
var password = prompt("Please enter a password:");
while (!isValidPassword(password)) {
    password = prompt("please enter a valid password:");
}
document.write("<h3>Valid password!</h3>")

function isValidPassword(password) {
    var regex = /^(?=[^0-9]*[0-9])[a-zA-Z0-9]{6,}$/;
    return regex.test(password);
}

// *******************************************************************************************

document.write("<h4>Question:16</h4>");
var university = "University of Kararchi"
var array = university.split(" ");
document.write("<h4>Array elements:</h4>");
for (var i = 0; i < array.length; i++) {
    document.write("<h4>" + array[i] + "</h4>");
}

// *******************************************************************************************

document.write("<h5>Question:17</h5>");
var input = prompt("Please enter a string:");
var lastChar = input.charAt(input.length - 1);
document.write("<h5>The last character is:" + lastChar + "</h5>");

// *******************************************************************************************

document.write("<h6>Question:18</h6>");
var str = "The quick brownfox jumps over the lazy dog";
var words = str.split(" ");
var count = 0;

for (let i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}
document.write("<h6>The number of occurrences of the word 'the' is:" + count + "</h6>");
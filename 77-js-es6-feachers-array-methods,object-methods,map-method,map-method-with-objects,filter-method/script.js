// ******************************
//* Example 1: Array Methods
// * NOTE: In JavaScript, "iterate" means to repeat a process or action for each item in a collection, such as an array or object.
// Create an array of strings
const arr = ["a", "b", "c", "d"];

// Use forEach to iterate over the array and log each element and its index
arr.forEach(function (element, idx) {
    console.log(`Element at index ${idx}: ${element}`);
});

// Use a for...of loop to iterate over the array and log each element
for (let ele of arr) {
    console.log(ele);
}

// Use a for...of loop to iterate over a string and log each character
for (let ele of "asdfgh") {
    console.log(ele);
}
// ******************************
// * Example 2: Object Methods
// * NOTE: In JS, a key-value pair is a fundamental concept in data storage and retrieval. It's a simple, yet powerful way to store and manage data.
// Create an object with key-value pairs
const obj = {
    a: 1,
    b: 3,
    c: 5,
};

// Log the object's keys, values, and entries
console.log(Object.keys(obj)); // Output: ["a", "b", "c"]
console.log(Object.values(obj)); // Output: [1, 3, 5]
console.log(Object.entries(obj)); // Output: [["a", 1], ["b", 3], ["c", 5]]

// ******************************
// * Example 3: Map Method
// * NOTE: The map() method in JavaScript is a powerful array method that creates a new array with the results of applying a provided function to every element in the original array.
// Create an array of numbers
const arr2 = [1, 2, 3, 4];

// Use map to create a new array with incremented values
const arrCopy = arr2.map(function (ele, idx) {
    return ++ele;
});

// Log the original array and the new array
console.log("arr2===> " + arr2); // Output: [1, 2, 3, 4]
console.log("arrCopy===>" + arrCopy); // Output: [2, 3, 4, 5]

// ******************************
// * Example 4: Map Method with Objects
// * NOTE: The map() method in JavaScript is a powerful array method that creates a new array with the results of applying a provided function to every element in the original array.

// Create an array of player objects
const players1 = [
    { firstName: "Babar", lastName: "Azam", strikeRate: 88.75 },
    { firstName: "M.", lastName: "Rizwan", strikeRate: 120.75 },
    { firstName: "Azam", lastName: "Khan", strikeRate: 0.75 },
    { firstName: "Usman", lastName: "Khan", strikeRate: -75 },
    { firstName: "Iftikhar", lastName: "Ahmed", strikeRate: 2.8 },
    { firstName: "Imad", lastName: "waseem", strikeRate: -120.75 },
];

// Use map to create a new array of player names
const playersName = players1.map(function (player, idx) {
    return `${player.firstName} ${player.lastName}`;
});

// Log the player names array
console.log(playersName);
// ******************************

// * Example 5: Filter Method

//  * NOTE: The filter() method in JavaScript is a powerful array method that creates a new array with all elements that pass the test implemented by the provided function.
// Create an array of player objects
const players2 = [
    { firstName: "Babar", lastName: "Azam", strikeRate: 88.75 },
    { firstName: "M.", lastName: "Rizwan", strikeRate: 120.75 },
    { firstName: "Azam", lastName: "Khan", strikeRate: 0.75 },
    { firstName: "Usman", lastName: "Khan", strikeRate: -75 },
    { firstName: "Iftikhar", lastName: "Ahmed", strikeRate: 2.8 },
    { firstName: "Imad", lastName: "waseem", strikeRate: -120.75 },
];

// Use filter to create a new array of players2 with strike rate less than 100
const bestPlayers = players2.filter(function (ele, idx) {
    return ele.strikeRate < 100;
});

// Log the best players2 array
console.log(bestPlayers);
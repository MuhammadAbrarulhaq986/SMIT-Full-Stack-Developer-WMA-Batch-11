// ***************************
// * Example 1: setTimeout

// setTimeout is a function that executes a callback function after a specified delay
setTimeout(function () {
    console.log("async"); // prints "async" to the console after 1 second
}, 1000);
// ***************************

// * Example 2: Promise Basics
// Create a new Promise instance
const myPromise = new Promise(function (resolve, reject) {
    // condition to resolve or reject the promise
    if (false) {
        // resolve the promise with data
        resolve("data");
    } else {
        // reject the promise with an error message
        reject("rejected");
    }
});

// Handle the promise resolution
myPromise
    .then(function (res) {
        // prints the resolved data to the console
        console.log(res, "---->");
    })
    .catch(function (err) {
        // prints the error message to the console
        console.log(err, "=====>");
    });
// ***************************

// * Example 3: Promise with setTimeout
// Create a new Promise instance
const promise = new Promise(function (resolve, reject) {
    // use setTimeout to delay the resolution of the promise
    setTimeout(function () {
        // resolve the promise with data
        resolve("res data");
    }, 3000);
});

// print the promise instance to the console
console.log(promise);

// Handle the promise resolution
promise.then(function (res) {
    // prints the resolved data to the console
    console.log(res);
    // print the promise instance again to the console
    console.log(promise);
});
// ***************************


// * Example 4: API Request with Fetch

// API endpoint URL
const apiUrl = "https://dummyjson.com/products?limit=100";

// fetch options
const options = {
    method: "GET", // request method
};

// make the API request using fetch
fetch(apiUrl, options)
    .then(function (res) {
        // print the response object to the console
        console.log(res);
        // parse the response data as JSON
        return res.json();
    })
    .then(function (data) {
        // print the parsed data to the console
        console.log(data);
    })
    .catch(function (err) {
        // print any error messages to the console
        console.log(err, "----->");
    });
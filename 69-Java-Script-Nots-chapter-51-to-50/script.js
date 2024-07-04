// ***************************************************************************************************************************
// //* Example 1: A Simple For Loop
// //* This for loop displays an alert on each iteration, counting from 0 to 3
// for (var i = 0; i <= 3; i++) {
//     //* Code to execute on each iteration: display an alert with the current value of i
//     alert(i);
//     // break;
// }

// ***************************************************************************************************************************
// //* Example 2: A Simple While Loop
// //* This while loop does the same thing as the for loop above
// var i = 0;
// while (i <= 3) {
//     //* Code to execute on each iteration: display an alert with the current value of i
//     alert(i);
//     //* Increment i by 1 on each iteration
//     i++;
//     // break;
// }
// ***************************************************************************************************************************
// //* Example 3: Converting a For Loop to a While Loop
// //* This example shows how to convert a for loop to a while loop
// var i = 0;
// while (i <= 3) {
//     //* Code to execute on each iteration: display an alert with the current value of i
//     alert(i);
//     //* Increment i by 1 on each iteration
//     i++;
//     // break;
// }

// ***************************************************************************************************************************

// //* Example 4: Using a For Loop to Iterate Over an Array
// //* This example shows how to use a for loop to iterate over an array
// var colors = ["red", "green", "blue", "yellow"];
// for (var i = 0; i < colors.length; i++) {
//     //* Code to execute on each iteration: display an alert with the current element of the array
//     alert(colors[i]);
//     // break;
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// // * While Loop Example
// //* 1. Declare a variable to serve as a counter, and assign a value to it.
// var i = 0;
// //* 2. Start the loop, specifying how long the loop is to run.
// while (i <= 3) {
//     //* 3. Execute one or more statements.
//     alert(i);
//     //* 4. Within the loop, as a final statement, advance the counter.
//     i++;
// }
// ***************************************************************************************************************************

// // * Do...While Loop Example
// //* 1. Declare a variable to serve as a counter, and assign a value to it.
// var i = 0;
// //* 2. Start the loop, specifying the code to execute.
// do {
//     //* 3. Execute one or more statements.
//     alert(i);
//     //* 4. Within the loop, advance the counter.
//     i++;
// }
// //* 5. Specify the loop-limiter condition.
// while (i <= 3);

// ***************************************************************************************************************************

// // * Example: While Loop with a Condition that is Never True
// //* 1. Declare a variable to serve as a counter, and assign a value to it.
// var i = 0;
// //* 2. Start the loop, specifying how long the loop is to run.
// while (i < 0) {
//     //* 3. Execute one or more statements (but this code will never execute).
//     alert(i);
//     //* 4. Within the loop, advance the counter (but this code will never execute).
//     i++;
// }

// ***************************************************************************************************************************

// // * Example: Do...While Loop with a Condition that is Never True
// //* 1. Declare a variable to serve as a counter, and assign a value to it.
// var i = 0;
// //* 2. Start the loop, specifying the code to execute.
// do {
//     //* 3. Execute one or more statements (this code will execute at least once).
//     alert(i);
//     //* 4. Within the loop, advance the counter.
//     i++;
// }
// //* 5. Specify the loop-limiter condition (which will be evaluated after the first iteration).
// while (i < 0);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// * Reading field values
function checkAddress(fieldId) {
    if (document.getElementById(fieldId).value === "") {
        alert("Email address required.");
    }
}
// ***************************************************************************************************************************
function checkAddress(fieldId) {
    var val = document.getElementById(fieldId).value;
    if (val === "") {
        alert("Email address required.");
    }
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
        case "60608":
            cityName = "Chicago";
            break;
        case "68114":
            cityName = "Omaha";
            break;
        case "53212":
            cityName = "Milwaukee";
    }
    document.getElementById("city").value = cityName;
}


// ***************************************************************************************************************************



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
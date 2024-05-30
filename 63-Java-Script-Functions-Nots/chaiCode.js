// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function sayMyName() {
//     console.log("A");
//     console.log("B");
//     console.log("R");
//     console.log("A");
//     console.log("R");
// }
// sayMyName();
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function addTwoNumbers(number1, number2) {
//     console.log(number1+number2);
// }

// addTwoNumbers(3, null);
// addTwoNumbers(3, 4);

// function addTwoNumbers(number1, number2) {

// return number1 + number2;

// let result = number1 + number2;    
// console.log("THIS WILL ONLY WORKS WHEN IT IS ABOVE THE RETURN");
// return result;
// !!! AFTER WRITING RETURN CONSOLE.LOG WILL NOT WORK !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// }

// const result = addTwoNumbers(3, 5);
// console.log("Result:", result);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function logInUserMessage(username = 'sam'){
// function logInUserMessage(username){

// if (username === undefined)
//     if (username === undefined) {
//         console.log("Please enter a username.");
//         return
//     }

//     return `${username} Just logged in`;
//     }

// console.log(logUserMessage("abrar"));
// console.log(logInUserMessage("Abrar"));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// !!!! function calculateCartPrice(...num1)   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!! THIS IS CALLED REST OR SPREAD OPERATOR ( ... )  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!! IT'S DEPEND ON THE CONDITION WHERE AND HOW !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!! YOU ARE USING FOR REST OR SPREAD !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function calculateCartPrice(...num1) {
// function calculateCartPrice(val1, val2, ...num1) 
//  ADDING (VAL1, VAL2 ) WILL STORE THE STARTING VALUE    
//  AND THE VALUE WILL NOT BE DISPLAY IN CONSOLE LOG   
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// !!!! HERE WE ARE USING REST OPERATOR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!! REST OPERATOR COMPACT THE VALUES AND MAKE AN ARRAY !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log(calculateCartPrice(200, 400, 500, 2000));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const user = {
    username: "abrar",
    prices: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and pirce is ${anyObject.price}`);
}
// handleObject(user);
handleObject({
    username: "johan",
    price: 399
});

const myNewArray = [200, 400, 600, 900]

function returnSecondValue(getArray) {
    return getArray[2];
    // index start from 0, 1,2,3,4 ...
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 900]));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
function logInUserMessage(username){
    
    // if (username === undefined)
    if (username === undefined) {
        console.log("Please enter a username.");
        return
    }

    return `${username} Just logged in`;
    }

// console.log(logUserMessage("abrar"));
console.log(logInUserMessage("Abrar"));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

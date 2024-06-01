document.write("<h1>Global and Local Nots/ Summary</h1>")
// **** IF YOUR CODE IS OUT SIDE OF CURLY BRACKETS {}  ************************************************************************
// **** IT'S CALLED A GLOBAL SCOPE  ************************************************************************

// let a = 10;
// const b = 20;
// var c = 30;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var c = 300;
let a = 100;


if (true) {
    // **** THIS IS A BLOCK SCOPE ************************************************************************
    let a = 10;
    const b = 20;
    // console.log("Inner: ", a);
    // var c = 30;
    // c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function one() {
    const username = "abrar";

    function two() {
        const website = "youtube";
        console.log(username);
    }

    // console.log(website);

    two();

}

// one();

if (true) {
    const username = "abrar";
    if (username === "abrar") {
        const website = " youtube";
        // console.log(username + website);
    }

    // console.log(website);

}

// console.log(username);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ******************* INTERESTING ************************************************************************

// !!!! NORMAL FUNCTION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(addOne(5));

function addOne(num) {
    return num + 1
}

// addOne(5);



// !!!! FUNCTION EXPRESSION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
addTwo(5);
// !!!! DECLARING VARIABLES WITH A FUNCTION IS CALLED !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!***************** HOISTING  *********************!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const addTwo = function (num) {
    return num + 2
}

// addTwo(5);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





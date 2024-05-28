// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const hello = () => {
    // !! WITHOUT A PARAMETTER  YOU CAN CALL THE FUNCTION  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !! FUNCTION SHOULD BE CALLED OUT SIDE OF THE CURLLY BARAKIT  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    console.log("Hay how are you I am fine");
    // !! THIS TYPE OF FUNCTION NOT TAKE A VALUE NOR HE RETURNS THE VALUE  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
hello();

const yoloo = () => {
    console.log("Bhai kasa hoo?");
    return "Hi"
    // !! THIS TYPE OF FUNCTION CAN RETURN THE VALUE EVEN WITHOUT A PARAMETER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
let v = yoloo();
console.log(v);

function onePlusAvg(x, y) {
    // !! IF YOU WANT TO CHANGE SOME THING YOU CAN USE FUNCTION  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !! TO CHANGE OR ADD IN THE WHOLE BLOCK OF CODE  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // console.log("Done");
    // return Math.round (1 + (x + y) / 2);
    return 1 + (x + y) / 2;
}

const sum = (p, q) => {
    return p + q;
}


let a = 1;
let b = 2;
let c = 3;

console.log("One plus Average of a and b is ", onePlusAvg(a, b));
console.log("One plus Average of a and c is ", onePlusAvg(a, c));
console.log("One plus Average of b and c is ", onePlusAvg(b, c));

console.log("The Sum of 9 and 7 is ", sum(9, 7));


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



// console.log("\nSum of a and b is\n ", a + b);
// console.log("\nSum of b and c is\n ", b + c);
// console.log("\nSum of a and c is\n ", a + c);
// ****************************************************************************
// document.write("<h1>Sum of a and b is ", a + b + "</h1>");
// document.write("<h1>Sum of b and c is ", b + c + "</h1>");
// document.write("<h1>Sum of a and c is ", a + c + "</h1>");
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log("\nAverage of a and b is\n ", (a + b) / 2);
// console.log("\nAverage of b and c is\n ", (b + c) / 2);
// console.log("\nAverage of a and c is\n ", (a + c) / 2);
// ****************************************************************************
// document.write("<h2>Average of a and b is ", (a + b) / 2) + "</h2>";
// document.write("<h2>Average of b and c is ", (b + c) / 2) + "</h2>";
// document.write("<h2>Average of a and c is ", (a + c) / 2) + "</h2>";
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log("\nOne plus Average of a and b is\n ", 1 + (a + b) / 2);
// console.log("\nOne plus Average of b and c is\n ", 1 + (b + c) / 2);
// console.log("\nOne plus Average of a and c is\n ", 1 + (a + c) / 2);
// ****************************************************************************
// document.write("<h3>One plus Average of a and b is ", 1 + (a + b) / 2 + "</h3>");
// document.write("<h3>One plus Average of b and c is ", 1 + (b + c) / 2 + "</h3>");
// document.write("<h3>One plus Average of a and c is ", 1 + (a + c) / 2 + "</h3>");
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



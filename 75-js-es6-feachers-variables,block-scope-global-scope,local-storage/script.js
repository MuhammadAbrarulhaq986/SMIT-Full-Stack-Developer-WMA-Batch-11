//*  Variables and Scope Global Scope

//* A variable declared outside of any function or block scope is in the global scope. It can be accessed from anywhere in the code.

var obj = {
    name: "Hamza",
    age: 27,
    classes: ["web and app"],
    present: true,
};

console.log(obj);
console.log(JSON.stringify(obj)); // Convert obj to a JSON string and log it to the console

//* Local Storage
// Local storage is a way to store data locally on the client-side.
// It can be used to store data that needs to be persisted across page reloads.

// Set the value of "count" to 10 in local storage
localStorage.setItem("count", 10);
// Remove the item with key "count" from local storage
localStorage.removeItem("count");

// Assuming 'obj' is a JavaScript object, convert it to a JSON string and store it in local storage
localStorage.setItem("user", JSON.stringify(obj));

// Retrieve the value associated with the key "user" from local storage
var user = localStorage.getItem("user");

// Log the retrieved value (which is a JSON string) to the console
console.log(user);

// Parse the JSON string back into a JavaScript object and log it to the console
console.log(JSON.parse(user));

//* Variable Declaration and Scope
// Variables can be declared using var, let, or const.
// The scope of a variable determines where it can be accessed.

// x is undefined here because it has not been declared yet.
console.log(x);
x = 3;
var x; // x scope is global, so it can be accessed from anywhere.
console.log(x);

//* This is an example of a variable being "hoisted" to the top of its scope. Even though the variable is declared after it is used, it is still in scope.

if (true) {
    var y = 50;
}
console.log(y); // y is still in scope because it was declared with var.

// *Function Scope
// Variables declared inside a function are only accessible within that function.

function foo() {
    var value = "abc"; // var scope is function, cannot be accessed outside function body
    console.log(value);
}
foo();

// *Block Scope
// Variables declared with let or const have block scope.
// They are only accessible within the block they are declared in.

let a = 5;
console.log(a);
a = 10;
console.log(a);

if (true) {
    let value = "xyz"; // cannot be accessed outside curly brackets
    console.log(value);
}

let value = "abc"; // however, can be redeclared in different scope
console.log(value);

//* Loop Scope
// Variables declared with var have function scope, so they can be accessed outside of a loop.
// Variables declared with let or const have block scope, so they cannot be accessed outside of a loop.

for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); // var can be accessed out of loop body with last value saved

for (let j = 0; j < 5; j++) {
    console.log(j);
}
// console.log(j); // throws reference error because j is not in scope.

//***  Nested Scope ***/
// When a block is nested inside another block, the inner block has access to the variables of the outer block.

if (true) {
    let z = 6;
    console.log(z);
    if (true) {
        console.log(z, "inner if"); // z is still in scope because the inner block has access to the outer block.
    }
}

if (true) {
    let z = 6;
    if (true) {
        let z = 5; // this z shadows the outer z, so the outer z is not accessible in this block.
        console.log(z);
    }
    console.log(z); // this logs the outer z, which is still in scope.
}
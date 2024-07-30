// This code demonstrates various JavaScript concepts, including:
// 1. Object destructuring
// 2. Ternary operators
// 3. Arrow functions
// 4. Function declarations

// Example 1: Object destructuring
// Create an object with various properties
const obj = {
    id: 1,
    title: "Essence Mascara Lash Princess",
    price: 9.99,
    tags: ["beauty", "mascara", "sports"],
    dimensions: {
        width: 20,
        height: 14.43,
        depth: 28.01,
    },
    meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
};

// Destructure the object to extract specific properties
// Extract title, width, and depth from the object
const {
    title,
    dimensions: { width, depth },
    tags: [, , a],
} = obj;

// Log the extracted properties to the console
console.log(title, width, depth); // Output: "Essence Mascara Lash Princess" 20 28.01

// Example 2: Ternary operators
// Define a variable with a value
const widthVar = 25;

// Use a ternary operator to determine the output based on the value of widthVar
const ternary =
    widthVar > 20
        ? "out of range"
        : widthVar < 20
            ? widthVar
            : widthVar === 20
                ? "barabar hai"
                : "kuch bhi";

// Log the result of the ternary operator to the console
console.log(ternary); // Output: "out of range"

// Example 3: Arrow functions
// Define an arrow function that logs the result of 2 + 2 to the console
const arrowFunc1 = () => console.log(2 + 2);

// Define an arrow function that takes two arguments and returns their sum
const arrowFunc2 = (a, b) => a + b;

// Call the first arrow function
arrowFunc1(); // Output: 4

// Call the second arrow function with arguments 4 and 7
console.log(arrowFunc2(4, 7)); // Output: 11

// Example 4: Function declarations
// Define a function that takes two arguments and returns their sum
function printSum(a, b) {
    return a + b;
}

// Call the function with arguments 4 and 7
console.log(printSum(4, 7)); // Output: 11

// Example 5: Another arrow function example
// Define another arrow function that takes two arguments and returns their sum
const arrowFunc3 = (a, b) => a + b;

// Call the arrow function with arguments 4 and 7
console.log(arrowFunc3(4, 7)); // Output: 11

// Total examples: 5
// Example 6: Object methods
// Define an object with a method
const obj2 = {
    name: "John",
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// Call the method on the object
obj2.greet(); // Output: "Hello, my name is John and I am 30 years old."

// Example 7: Classes
// Define a class with a constructor and a method
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create an instance of the class
const person = new Person("Jane", 25);

// Call the method on the instance
person.greet(); // Output: "Hello, my name is Jane and I am 25 years old."

// Example 8: Inheritance
// Define a subclass that inherits from the Person class
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    greet() {
        super.greet();
        console.log(`I am studying ${this.major}.`);
    }
}

// Create an instance of the subclass
const student = new Student("Bob", 20, "Computer Science");

// Call the method on the instance
student.greet(); // Output: "Hello, my name is Bob and I am 20 years old. I am studying Computer Science."

// Example 9: Async/Await
// Define an asynchronous function that returns a promise
async function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 2000);
    });
}

// Call the asynchronous function and log the result
asyncFunc().then((result) => {
    console.log(result); // Output: "Hello, world!"
});

// Example 10: Try/Catch
// Define a function that throws an error
function throwErr() {
    throw new Error("Something went wrong!");
}

// Call the function and catch the error
try {
    throwErr();
} catch (err) {
    console.log(err.message); // Output: "Something went wrong!"
}
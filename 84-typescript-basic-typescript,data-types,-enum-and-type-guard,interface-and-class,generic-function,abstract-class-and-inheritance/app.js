var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//* Data Types: Define the type of value a variable can hold, such as number, string, or boolean.
//
//* Enum: A way to define a set of named values, like a collection of constants.
//
//* Type Guard: A function that narrows the type of a value within a specific scope.
//
//* Interface: A blueprint for an object, defining its properties, methods, and their types.
//
//* Class: A blueprint for creating objects that contain data and functions that operate on that data.
//
//* Generic Function: A function that can work with multiple types of data, using type parameters to define the type.
//
//* Abstract Class: A class that cannot be instantiated on its own and is meant to be inherited by other classes
//
//* Inheritance: A mechanism where a class can inherit properties and behavior from another class.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//* Example 1: Basic TypeScript
// Get a button element from the HTML document
var btn = document.querySelector("button");
// Define a function to add two numbers
var sum = function (num1, num2) { return num1 + num2; };
// Add an event listener to the button
btn.addEventListener("click", function () {
    // Get two input elements from the HTML document
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    // Call the sum function with the values of the input elements
    alert(sum(Number(num1.value), Number(num2.value)));
});
//* Example 2: Data Types
// Define a variable with a number data type
var num = 1;
// Define a variable with a string data type
var numberString = "12"; // Renamed for clarity
// Update the values of the variables
num = 90;
numberString = "anc";
// Define a variable with a string data type and initialize it later
var firstName;
firstName = "Nadir";
// Define an array of strings
var fruits = [];
fruits.push("apple", "mango");
// Log the values to the console
console.log(num, numberString, firstName, fruits);
// Example 3: Enum and Type Guard
// Define an enum for electric appliances
var ElectricAppliance;
(function (ElectricAppliance) {
    ElectricAppliance["Fan"] = "fan";
    ElectricAppliance["Ac"] = "Ac";
})(ElectricAppliance || (ElectricAppliance = {}));
// Define a type for electric appliances
var electricAppliance = [
    ElectricAppliance.Fan,
    ElectricAppliance.Ac,
];
// Define an array of electric appliances
var arr = electricAppliance;
// Define a function to log the title of a product
var logTitle = function (product) {
    console.log(product.title);
};
// Call the logTitle function with an object that has a title property
logTitle({ title: "Bulb" });
// Define a class that implements the IMammal interface
var Animal = /** @class */ (function () {
    function Animal(id, name, age, runningSpeed) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.runningSpeed = runningSpeed;
    }
    return Animal;
}());
// Create an instance of the Animal class
var animal = new Animal(1, "Lion", 10, "50 km/hr");
// Log the properties of the animal instance
console.log(animal.id);
console.log(animal.name);
console.log(animal.age);
console.log(animal.runningSpeed);
//* Example 5: Generic Function
// Define a generic function to merge two objects
var merge = function (obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
};
// Call the merge function with two objects
var merged = merge({ a: 1, b: 2 }, { c: 3, d: 4 });
// Log the merged object
console.log(merged);
//* Example 6: Abstract Class and Inheritance
// Define an abstract class for species
var Species = /** @class */ (function () {
    function Species(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    return Species;
}());
// Define a class that extends the Species class
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(id, name, age, flyingSpeed) {
        var _this = _super.call(this, id, name, age) || this;
        _this.id = id;
        _this.name = name;
        _this.age = age;
        _this.flyingSpeed = flyingSpeed;
        _this.legs = 2;
        _this.favouriteFood = "seeds";
        return _this;
    }
    Bird.prototype.isEating = function () {
        console.log(this.name + " is eating " + this.favouriteFood);
    };
    return Bird;
}(Species));
// Create an instance of the Bird class
var bird = new Bird(1, "Parrot", 2, "20Km/hr");
// Log the properties of the bird instance
console.log(bird.legs);
// Call the isEating method of the bird instance
bird.isEating();

// ****************************************************************************************
// !!! SIR CODE OF Constructor and Prototype Example !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // Define a constructor function for the Student object
// function Student(firstname, lastname, rollno, courses) {
//     // Initialize the properties of the Student object
//     this.firstName = firstname; // First name of the student
//     this.lastName = lastname; // Last name of the student
//     this.rollno = rollno; // Roll number of the student
//     this.courses = courses; // Array of courses the student is enrolled in

//     // Define a method to get the full name of the student
//     this.getFullName = function () {
//         // Return the full name by concatenating first and last names
//         return `${this.firstName} ${this.lastName}`;
//     };
// }

// // Create three instances of the Student object
// var student1 = new Student("ali", "ahmed", "399", ["course 1", "course 2"]);
// var student2 = new Student("Salman", "Khan", "399", ["course 1", "course 2"]);
// var student3 = new Student("Fakhar", "Zaman", "399", ["course 1", "course 2"]);

// // Log the full names of the students to the console
// console.log(student1.getFullName());
// console.log(student2.getFullName());
// console.log(student3.getFullName());

// // Enroll a new course for student1
// student1.enrollNewCourse("Graphics");

// // Log the updated student1 object to the console
// console.log(student1);

// // Define a method to enroll a new course for a student
// Student.prototype.enrollNewCourse = function (courseName) {
//     // Add the new course to the courses array
//     this.courses.push(courseName);
// };
// ****************************************************************************************
// !!!! Constructor and Prototype Example !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Define a constructor function
function Person(name, age) {
    // Initialize properties
    this.name = name;
    this.age = age;
}

// Define a method on the prototype
Person.prototype.displayInfo = function () {
    var info = "Name: " + this.name + ", Age: " + this.age;
    console.log(info);
};

// ******************

// 
// Define a constructor function with methods
function PersonWithMethod(name, age) {
    // Initialize properties
    this.name = name;
    this.age = age;

    // Define a method
    this.sayHello = function () {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    };
}

// ******************


// Define a constructor function that inherits from Animal
function Animal(name) {
    // Initialize properties
    this.name = name;
}

// Define a method on the prototype
Animal.prototype.sound = function () {
    console.log("The animal makes a sound.");
};

// Define a constructor function that inherits from Animal
function Dog(name) {
    // Call the Animal constructor
    Animal.call(this, name);
}

// Set up the prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Define a method on the Dog prototype
Dog.prototype.bark = function () {
    console.log("The dog barks.");
};

// ******************

// Create a new instance of Person
var person1 = new Person("John", 30);

// Call the displayInfo method
person1.displayInfo();

// Create a new instance of PersonWithMethod
var person2 = new PersonWithMethod("Jane", 25);

// Call the sayHello method
person2.sayHello();

// Create a new instance of Dog
var dog1 = new Dog("Fido");

// Call methods
dog1.sound();
dog1.bark();
// ****************************************************************************************

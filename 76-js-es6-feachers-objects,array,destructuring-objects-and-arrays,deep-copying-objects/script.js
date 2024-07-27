// Arrays
// Create an empty array
const arr = [];

// Assign a value to the first index
arr[0] = "apple";

// Add a new element to the end of the array
arr.push("mango");

// Add a new element to the beginning of the array
arr.unshift("banana");

// Add multiple elements at a specific index
arr.splice(3, 0, "cherry", "orange");

// Remove the last element from the array
arr.pop();

// Remove the first element from the array
arr.shift();

// Remove an element at a specific index
arr.splice(1, 1);

// Log the final array
console.log("===*First*==>", arr);
// *******************************************************************
// Objects
// Create an object
const obj = {
    firstName: "Nadir",
    LastName: "Bashir",
    email: "nadir@gmail.com",
};

// Add a new property to the object
obj["phone"] = "030000000";

// Add a new property with an array value
obj.hobbies = ["Football", "painting"];

// Update an existing property
obj.email = "a@a.com";

// Delete a property from the object
delete obj.phone;

// Log the final object
console.log("===*Second*==>", obj);
// *******************************************************************
// Destructuring Objects and Arrays
// Create an object
const user1 = {
    firstName: "Nadir",
    LastName: "Bashir",
    email: "nadir@gmail.com",
    hobbies: ["Football", "painting"],
    address: {
        country: "Pakistan",
        city: "Karachi",
        street: "abc",
        house: "123",
        zipCode: "73700",
    },
};

// Destructure the object
const {
    firstName,
    LastName,
    address: { city, zipCode },
    hobbies: [firstHobby],
} = user1;

// Log the destructured values
console.log(`${firstName} ${LastName}, ${city}, favorite: ${firstHobby}`);

// Create an array
const fruits = ["apple", "mango", "banana", "orange", { inStock: true }];

// Destructure the array
const [a, b, , , { inStock }] = fruits;

// Log the destructured values
console.log("===*Third*==>", a, b, inStock);
// *******************************************************************
// Deep Copying Objects
// Create an object
const user2 = {
    firstName: "Nadir",
    LastName: "Bashir",
    email: "nadir@gmail.com",
    hobbies: ["Football", "painting"],
    address: {
        country: "Pakistan",
        city: "Karachi",
        street: { streetName: "abc", streetNumber: 123 },
        house: "123",
        zipCode: "73700",
    },
};

// Create a copy of the object using spread operator
const userCopy = { ...user2 };

// Log the original and copied objects
console.log("===*Forth*==>", user2);
console.log("===*Fith*==>", userCopy);

// Update a nested property in the copied object
userCopy.address.country = "hi";

// Note: This will not update the original object, but it will update the copied object
// *******************************************************************

//
//* Union Types: Combine multiple types into one (e.g. string | number)
//
// * Intersection Types: Combine multiple types into one with all properties (e.g. Rectangle & Circle)
//
//* Type Guards: Functions that narrow the type of a value within a specific scope (e.g. isString(value))
//
//* These features help you work with complex types in TypeScript!

//* Union Types
// Define a union type: a type that can be one of multiple types
type StringOrNumber = string | number;

// Use the union type to declare a variable
let id: StringOrNumber = "123"; // initially assign a string value
id = 456; // okay, can reassign to a number value

// Error: Type 'boolean' is not assignable to type 'StringOrNumber'.
// id = true; // error, cannot assign a boolean value
console.log("Union Type:");
console.log(id); // print the current value of id

//* Intersection Types
// Define an intersection type: a type that combines multiple types
type Person = { name: string } & { age: number };

// Use the intersection type to declare a variable
let person: Person = { name: "John", age: 30 }; // must have both name and age properties

// Error: Type '{ name: string; }' is missing the following properties from type 'Person': age
// let person2: Person = { name: 'Jane' }; // error, missing age property

console.log("\nIntersection Type:");
console.log(person); // print the person object

//* Type Guards
// Define a type guard: a function that narrows the type of a value
function isString(value: unknown): value is string {
  // check if the value is a string
  return typeof value === "string";
}

function isNumber(value: unknown): value is number {
  // check if the value is a number
  return typeof value === "number";
}

// Use the type guard to narrow the type of a value
let value: string | number = "hello"; // declare a variable with a union type

if (isString(value)) {
  // value is string, can use string methods
  console.log("\nType Guard:");
  console.log(value.toUpperCase()); // okay, can call toUpperCase()
} else {
  // at this point, value is not a string, so it must be a number
  // we can use the 'as' keyword to assert that value is a number
  const numberValue = value as number;
  console.log(numberValue.toFixed(2)); // okay, can call toFixed()
}

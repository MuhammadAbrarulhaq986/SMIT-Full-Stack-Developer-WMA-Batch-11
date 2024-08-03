//* Example 1: Basic TypeScript
// Get a button element from the HTML document
const btn: HTMLButtonElement = document.querySelector(
  "button"
) as HTMLButtonElement;

// Define a function to add two numbers
const sum = (num1: number, num2: number): number => num1 + num2;

// Add an event listener to the button
btn.addEventListener("click", () => {
  // Get two input elements from the HTML document
  const num1: HTMLInputElement = document.getElementById(
    "num1"
  ) as HTMLInputElement;
  const num2: HTMLInputElement = document.getElementById(
    "num2"
  ) as HTMLInputElement;

  // Call the sum function with the values of the input elements
  alert(sum(Number(num1.value), Number(num2.value)));
});

//* Example 2: Data Types
// Define a variable with a number data type
let num: number = 1;

// Define a variable with a string data type
let numberString: string = "12"; // Renamed for clarity

// Update the values of the variables
num = 90;
numberString = "anc";

// Define a variable with a string data type and initialize it later
let firstName: string;
firstName = "Nadir";

// Define an array of strings
const fruits: string[] = [];
fruits.push("apple", "mango");

// Log the values to the console
console.log(num, numberString, firstName, fruits);

// Example 3: Enum and Type Guard

// Define an enum for electric appliances
enum ElectricAppliance {
  Fan = "fan",
  Ac = "Ac",
}

// Define a type for electric appliances
const electricAppliance: ElectricAppliance[] = [
  ElectricAppliance.Fan,
  ElectricAppliance.Ac,
];

// Define an array of electric appliances
let arr: ElectricAppliance[] = electricAppliance;

// Define a function to log the title of a product
const logTitle = (product: { title: string }): void => {
  console.log(product.title);
};

// Call the logTitle function with an object that has a title property
logTitle({ title: "Bulb" });

// Example 4: Interface and Class
// Define an interface for mammals
interface IMammal {
  id: number;
  name: string;
  age: number;
  runningSpeed: string;
}

// Define a class that implements the IMammal interface
class Animal implements IMammal {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public runningSpeed: string
  ) {}
}

// Create an instance of the Animal class
const animal: Animal = new Animal(1, "Lion", 10, "50 km/hr");

// Log the properties of the animal instance
console.log(animal.id);
console.log(animal.name);
console.log(animal.age);
console.log(animal.runningSpeed);

// Example 5: Generic Function

// Define a generic function to merge two objects
const merge = <T, U>(obj1: T, obj2: U): T & U => {
  return { ...obj1, ...obj2 };
};

// Call the merge function with two objects
const merged = merge({ a: 1, b: 2 }, { c: 3, d: 4 });

// Log the merged object
console.log(merged);

// Example 6: Abstract Class and Inheritance

// Define an abstract class for species
abstract class Species {
  constructor(public id: number, public name: string, public age: number) {}

  abstract isEating(): void;
}

// Define a class that extends the Species class
class Bird extends Species {
  public legs: number;
  public favouriteFood: string;

  constructor(
    public id: number,
    public name: string,
    public age: number,
    public flyingSpeed: string
  ) {
    super(id, name, age);
    this.legs = 2;
    this.favouriteFood = "seeds";
  }

  isEating(): void {
    console.log(this.name + " is eating " + this.favouriteFood);
  }
}

// Create an instance of the Bird class
const bird: Bird = new Bird(1, "Parrot", 2, "20Km/hr");

// Log the properties of the bird instance
console.log(bird.legs);

// Call the isEating method of the bird instance
bird.isEating();

// *** Product Class ***
// Define a class Product
class Product {
    /**
     * Constructor function to initialize product properties
     * @param {string} title - Product title
     * @param {number} price - Product price
     * @param {number} quantity - Product quantity
     */
    constructor(title, price, quantity) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        console.log("Product created:", this);
    }

    /**
     * Check if product is in stock
     * @returns {boolean} True if product is in stock, false otherwise
     */
    inStock() {
        return this.quantity > 0;
    }
}

// Create product instances
const keyboard = new Product("Keyboard", 200, 0);
const mouse = new Product("Mouse", 50, 12);
const mic = new Product("Mic", 500, 1);

console.log(keyboard.inStock()); // false
console.log(mouse.inStock()); // true
console.log(mic.inStock()); // true

//*** Pet Class and its Subclasses ***
// Define a class Pet
class Pet {
    /**
     * Constructor function to initialize pet properties
     * @param {string} name - Pet name
     * @param {string} breed - Pet breed
     */
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    /**
     * Pet is eating
     */
    eat() {
        console.log(`${this.name} is eating...`);
    }
}

// Define a subclass Cat that extends Pet
class Cat extends Pet { }

// Define a subclass Parrot that extends Pet
class Parrot extends Pet {
    /**
     * Constructor function to initialize parrot properties
     * @param {string} name - Parrot name
     * @param {string} breed - Parrot breed
     * @param {number} flyingHours - Parrot flying hours
     */
    constructor(name, breed, flyingHours) {
        super(name, breed); // Call Pet constructor
        this.flyingHours = flyingHours;
    }
}

// Create pet instances
const cat = new Cat("Tom", "Persian");
const parrot = new Parrot("Mittoo", "Australian", 1);

cat.eat(); // Tom is eating...
console.log(cat.flyingHours); // undefined
console.log(parrot.flyingHours); // 1


// *** Object with Functions ***
// Define an object with functions
const obj = {
    name: 'JOJO',
    /**
     * Function to log this context
     */
    foo: function () {
        console.log("func", this);
    },
    /**
     * Arrow function to log this context
     */
    fooArrow: () => {
        console.log("func", this);
    }
}

// Call functions
obj.foo(); // func { name: 'JOJO', foo: [Function: foo], fooArrow: [Function: fooArrow] }
obj.fooArrow(); // func undefined
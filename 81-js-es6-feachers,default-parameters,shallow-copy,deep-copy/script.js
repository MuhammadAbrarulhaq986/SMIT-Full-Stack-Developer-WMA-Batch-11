//* Default Parameters
// ==================
//* Default parameters are used to provide a default value to a function parameter when no value is passed.

function calculateDiscount(price = 1000, percentage = 20) {
    // Calculate the discount
    const discount = price * (percentage / 100);
    // Return the price after discount
    return price - discount;
}

// Log the result
console.log("after discount " + calculateDiscount(1000));

//* Shallow Copy
// ============
//* A shallow copy of an object is a new object that contains the same properties as the original object, but the properties are not cloned. Instead, the new object contains references to the same properties as the original object.

const user = {
    name: "salman",
    age: "25",
    hobbies: ["painting", "sports"],
    contactInfo: {
        phone: "348729",
        email: "a@a.com",
        address: {
            houseNo: 573,
            city: "Karachi",
            country: "pakistan",
        },
    },
};

// Create a shallow copy of the user object
const userCopy = { ...user };

// Change the first hobby in the userCopy object
userCopy.hobbies[0] = "Walking";

// Log the results
console.log("user", user);
console.log("userCopy", userCopy);

//* Deep Copy
// ==========
//* To create a deep copy of an object, where all properties are cloned, you can use the spread operator recursively.

const userDeepCopy = {
    ...user,
    contactInfo: { ...user.contactInfo },
    hobbies: [...user.hobbies],
};

// Change the first hobby in the userDeepCopy object
userDeepCopy.hobbies[0] = "Running";

// Log the results
console.log("user", user);
console.log("userDeepCopy", userDeepCopy);
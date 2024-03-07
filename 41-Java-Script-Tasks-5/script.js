// Define the shopping cart as an array of objects
const cartItems = [
    {name: 'item 1', price: 10, quantity: 2},
    {name: 'item 2', price: 20, quantity: 3}
];

// Calculate subtotal
function calculateSubtotal() {
    let subtotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
        subtotal += cartItems[i].price * cartItems[i].quantity;
    }
    return subtotal;
}

// Calculate tax
function calculateTax(subtotal) {
    const tax = 0.08;
    return subtotal * tax;
}

// Calculate Total
function calculateTotal() {
    const subtotal = calculateSubtotal();
    const taxAmount = calculateTax(subtotal);
    const total = subtotal + taxAmount;
    return total;
}

// Implement checkout process
function checkout() {
    // Clear shopping cart
    cartItems = [];

    // Display Confirmation message 
    alert("Checkout complete! Your total was: $" + calculateTotal().toFixed(2));
}

// Example usage
checkout();
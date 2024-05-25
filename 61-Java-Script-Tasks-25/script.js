document.write("<h6>OBJECTS Question: '1' to '4'</h6>");
// **************************************************************************************************************************************
document.write("<h1>Question: 1</h1>");
var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" },
];

// ***** Calculating Total Price of Each Item ***************************************************************************

itemsArray.forEach((item) => {
    item.totalPrice = parseInt(itemsArray) * parseInt(item.quantity);
    // !!!!!! The `parseInt()`  function converts its !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!! first argument to a string, parses that !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!! string, then returns an integer or NaN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // console.log(`Total price of the ${item.name} ${item.price}`);
    document.write(`<h1>Total price of the ${item.name} ${item.price} </h1>`);
});

// ***** Calculating Total Price of All Items ***************************************************************************

var totalPriceOfAllItems = itemsArray.reduce((access, item) => {
    // !!!!!! The reduce() method of Array instances executes a user-supplied !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!! "reducer" callback function on each element of the array, in order, !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!! passing in the return value from the calculation on the preceding element.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    return access + parseInt(item.price) * parseInt(item.quantity);
}, 0);
// console.log(`Total price of all items: ${totalPriceOfAllItems}`);
document.write(`<h1>Total price of all items: ${totalPriceOfAllItems} </h1>`);
// **************************************************************************************************************************************
// **************************************************************************************************************************************
// **************************************************************************************************************************************

document.write("<h2>Question: 2</h2>");
var usersArray = [
    {
        name: " Frieren ",
        email: " frieren123@smit.com ",
        password: " 222222 ",
        age: " 100 ",
        gender: " Female ",
        city: " Moscow ",
        country: " Russia ",
    },
    {
        name: " Yoruichi ",
        email: " yoruichi123@smit.com ",
        password: " 333333 ",
        age: " 30 ",
        gender: " Female ",
        city: " Ankara ",
        country: " Turkey ",
    },
    {
        name: " Rukia ",
        email: " rukia123@smit.com ",
        password: " 444444 ",
        age: " 50 ",
        gender: " Female ",
        city: " Rukongai ",
        country: " Iran ",
    },
    {
        name: " Orihime ",
        email: " orihime123@smit.com ",
        password: " 555555 ",
        age: " 50 ",
        gender: " Female ",
        city: " Baghdad ",
        country: " Iraq ",
    },
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    {
        name: " Abrar ",
        email: " abrar123@smit.com ",
        password: " 123456 ",
        age: " 19 ",
        gender: " Male ",
        city: " Karachi ",
        country: " Pakistan ",
    },
    {
        name: " Gojo ",
        email: " gojo123@smit.com ",
        password: " 666666 ",
        age: " 33 ",
        gender: "Male",
        city: "Sibuya",
        country: "Japan",
    },
    {
        name: " Esagi ",
        email: " esagi123@smit.com ",
        password: " 101010 ",
        age: " 18 ",
        gender: " Male ",
        city: " Islamabad ",
        country: " China ",
    },
    {
        name: " Rudeus ",
        email: " rudeus123@smit.com ",
        password: " 111111 ",
        age: " 17 ",
        gender: " Male ",
        city: " Lahor ",
        country: " Koreya ",
    },
];

// ***** Accessing the first user in the array ***************************************************************************
var firstUser = usersArray[0];
// console.log(firstUser);
document.write("<h2>" + firstUser + "</h2>");

// ***** Looping through the array and printing ***************************************************************************
// ***** the name and age of each user ***************************************************************************
usersArray.forEach((user) => {
    // console.log(`Name: ${user.name},
    // Age: ${user.age}, 
    // Gender: ${user.gender},
    // Email: ${user.email},
    // Password: ${user.password}, 
    // City: ${user.city},
    // Country: ${user.country}
    // `);
    document.write(`<h2>Name: ${user.name},
    Age: ${user.age}, 
    Gender: ${user.gender},
    Email: ${user.email},
    Password: ${user.password}, 
    City: ${user.city},
    Country: ${user.country}
    </h2>`);

    // ***** the name and age of each user ***************************************************************************
    if ("age" in usersArray[0]) {
        // document.write("The age property exists in the First user.");
        console.log("The age property exists in the First user.");
    } else {
        // document.write("The age property doess not exists in the First user.");
        console.log("The age property doess not exists in the First user.");
    }


    // ** Checking if the firstName property exists in the first user ***************************************************************************
    if ("firstName" in usersArray[0]) {
        // document.write("The firstName property exists in the First user.");
        console.log("The firstName property exists in the First user.");
    } else {
        // document.write("The firstName property doess not exists in the First user.");
        console.log("The firstName property doess not exists in the First user.");
    }

    var userOver50 = usersArray.filter(user => parseInt(user.age) > 50);
    // document.write(userOver50);
    console.log(userOver50);

    usersArray.sort((a, b) => parseInt(a.age) - parseInt(b.age));
    // document.write(usersArray);
    console.log(usersArray);
});

// **************************************************************************************************************************************
// **************************************************************************************************************************************
// **************************************************************************************************************************************

document.write("<h3>Question: 3</h3>");
// Define a constructor function
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Create multiple records using the constructor
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

// Access properties of each object
//   console.log(book1.title); 
//   console.log(book1.author); 
//   console.log(book1.year);

//   console.log(book2.title); 
//   console.log(book2.author); 
//   console.log(book2.year);


//   console.log(book3.title); 
//   console.log(book3.author); 
//   console.log(book3.year); 


document.write("<h3>" + book1.title);
document.write("<h3>" + book1.year);
document.write("<h3>" + book1.author);


document.write("<h3>" + book2.title);
document.write("<h3>" + book2.year);
document.write("<h3>" + book2.author);


document.write("<h3>" + book3.title);
document.write("<h3>" + book3.year);
document.write("<h3>" + book3.author);

// **************************************************************************************************************************************
// **************************************************************************************************************************************
// **************************************************************************************************************************************

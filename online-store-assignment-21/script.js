//* Get the HTML element with the id "list"
const list = document.getElementById("list");

//* Function to get a single product by its ID
function getSingleProduct(productId) {
    //* Make a GET request to the API to fetch the product with the given ID
    fetch(`https://dummyjson.com/products/${productId}`)
        .then(function (res) {
            //* Log the response to the console
            console.log(res);
            //* Return the response data in JSON format
            return res.json();
        })
        .then(function (data) {
            //* Log the product data to the console
            console.log(data);
            //* Append the product data to the DOM
            appendToDOM(data.products);
        })
        .catch(function (err) {
            //* Catch any errors that occur during the API request
            //*   alert(err); // execute when API promise rejected
        });
}

//* Event listener for when the window finishes loading
window.addEventListener("load", function (evt) {
    //* Make a GET request to the API to fetch all products
    fetch("https://dummyjson.com/products")
        .then(function (res) {
            //* Log the response to the console
            console.log(res);
            //* Return the response data in JSON format
            return res.json();
        })
        .then(function (data) {
            //* Log the product data to the console
            console.log(data);
            //* Append the product data to the DOM
            appendToDOM(data.products);
        })
        .catch(function (err) {
            //* Catch any errors that occur during the API request
            //*   alert(err); // execute when API promise rejected
        });
});

//* Function to append product data to the DOM
function appendToDOM(products) {
    // *Loop through each product in the products array
    for (let product of products) {
        //* Create a HTML card element for the product
        let card = `<div class="card" style="width: 18rem;">
            <img src=${product.thumbnail} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">Brand: ${product.brand}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Price: ${product.price}</li>
              <li class="list-group-item">description: ${product.description}</li>
            <li class="list-group-item"onclick="getSingleProduct(${product.id})">
            <button>show details</button>
            </li>

            </ul>
          </div>`;
        //* Append the card element to the list element
        list.innerHTML += card;
    }
}
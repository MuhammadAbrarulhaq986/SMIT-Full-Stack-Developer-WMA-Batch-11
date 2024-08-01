// * GET Request
// Get all products
async function getProducts() {
    try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        console.log(data);
        appendToDOM(data.products);
    } catch (err) {
        console.log("Error fetching products:", err);
    }
}

// Call getProducts on window load
window.addEventListener("load", getProducts);

// *GET Single Product
// Get single product by ID
async function getSingleProduct(productId) {
    try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log("Error fetching single product:", err);
    }
}

// Call getSingleProduct on button click
// <button onclick="getSingleProduct(1)">Show details</button>

// *POST Request
// Create a new product
async function createProduct() {
    try {
        const newProduct = {
            title: "New Product",
            brand: "New Brand",
            price: 99.99,
            description: "New product description",
        };

        const res = await fetch("https://dummyjson.com/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct),
        });

        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log("Error creating product:", err);
    }
}

// Call createProduct on button click
// <button onclick="createProduct()">Create product</button>

// * PATCH Request
// Update a product
async function updateProduct(productId) {
    try {
        const updatedProduct = {
            title: "Updated Product",
            brand: "Updated Brand",
            price: 99.99,
            description: "Updated product description",
        };

        const res = await fetch(`https://dummyjson.com/products/${productId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedProduct),
        });

        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log("Error updating product:", err);
    }
}

// Call updateProduct on button click
// <button onclick="updateProduct(1)">Update product</button>

// *DELETE Request
// Delete a product
async function deleteProduct(productId) {
    try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`, {
            method: "DELETE",
        });

        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log("Error deleting product:", err);
    }
}

// Call deleteProduct on button click
// <button onclick="deleteProduct(1)">Delete product</button>


// *Append to DOM
// Append products to DOM
const appendToDOM = (products) => {
    const list = document.getElementById("list");
    let html = "";

    products.forEach((product) => {
        html += `
        <div class="card" style="width: 18rem;">
          <img src=${product.thumbnail} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">Brand: ${product.brand}</p>
            <p class="card-text">Price: ${product.price}</p>
            <p class="card-text">Description: ${product.description}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><button onclick="getSingleProduct(${product.id})">Show details</button></li>
          </ul>
        </div>
      `;
    });

    list.innerHTML = html;
};

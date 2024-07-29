const list = document.getElementById("list");

function getSingleProduct(productId) {
    fetch(`https://dummyjson.com/products/${productId}`)
        .then(function (res) {
            console.log(res);
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            list.innerHTML = ''; // clear existing content
            appendToDOM([data]); // pass single product as an array
        })
        .catch(function (err) {
            //   alert(err); // execute when API promise rejected
        });
}

window.addEventListener("load", function (evt) {
    fetch("https://dummyjson.com/products")
        .then(function (res) {
            console.log(res);
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            list.innerHTML = ''; // clear existing content
            appendToDOM(data.products);
        })
        .catch(function (err) {
            //   alert(err); // execute when API promise rejected
        });
});

function appendToDOM(products) {
    const cards = products.map((product) => {
        return `
      <div class="card">
        <img src=${product.thumbnail} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">Brand: ${product.brand}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Price: ${product.price}</li>
          <li class="list-group-item">description: ${product.description}</li>
          <li class="list-group-item"><button class="show-details-btn" onclick="getSingleProduct(${product.id})">show details</button></li>
          <li class="list-group-item"><button class="update-product-btn" onclick="updateProduct(${product.id})">update product</button></li>
          <li class="list-group-item"><button class="delete-product-btn" onclick="deleteProduct(${product.id})">delete product</button></li>
        </ul>
      </div>
    `;
    });
    list.innerHTML = cards.join('');
}

// POST REQUEST
function createProduct() {
    const newProduct = {
        title: "New Product",
        brand: "New Brand",
        price: 100,
        description: "New product description"
    };

    fetch("https://dummyjson.com/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
    })
        .then(function (res) {
            console.log(res);
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            list.innerHTML = ''; // clear existing content
            appendToDOM([data]); // pass single product as an array
        })
        .catch(function (err) {
            //   alert(err); // execute when API promise rejected
        });
}

// PATCH REQUEST
function updateProduct(productId) {
    const updatedProduct = {
        title: "Updated Product",
        brand: "Updated Brand",
        price: 200,
        description: "Updated product description"
    };

    fetch(`https://dummyjson.com/products/${productId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)
    })
        .then(function (res) {
            console.log(res);
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            list.innerHTML = ''; // clear existing content
            appendToDOM([data]); // pass single product as an array
        })
        .catch(function (err) {
            //   alert(err); // execute when API promise rejected
        });
}

// DELETE REQUEST
function deleteProduct(productId) {
    fetch(`https://dummyjson.com/products/${productId}`, {
        method: "DELETE"
    })
        .then(function (res) {
            console.log(res);
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            list.innerHTML = ''; // clear existing content
            fetch("https://dummyjson.com/products")
                .then(function (res) {
                    console.log(res);
                    return res.json();
                })
                .then(function (data) {
                    console.log(data);
                    appendToDOM(data.products);
                })
                .catch(function (err) {
                    //   alert(err); // execute when API promise rejected
                });
        })
        .catch(function (err) {
            //   alert(err); // execute when API promise rejected
        });
}
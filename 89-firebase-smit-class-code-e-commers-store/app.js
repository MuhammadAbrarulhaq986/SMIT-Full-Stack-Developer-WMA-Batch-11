// Import necessary Firebase functions and variables
import {
    app,
    auth,
    collection,
    db,
    doc,
    getDoc,
    getDocs,
    onAuthStateChanged,
    signOut,
} from "./utils/firebase-config.js";

// Function to retrieve all products from Firebase database
const getAllProducts = async () => {
    // Get current user data from local storage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    // Get the HTML element to display products
    const products_list = document.getElementById("products_list");
    // Get all products from Firebase database
    const querySnapshot = await getDocs(collection(db, "products"));
    // Loop through each product and display it on the page
    querySnapshot.forEach((doc) => {
        // Extract product data from Firebase document
        const { id, title, description, price, picture, createdBy } = doc.data();
        // Create HTML element for product and add it to the page
        products_list.innerHTML += `<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[400px]">
        <a href="#">
            <img class="rounded-t-lg" src="${picture}" alt="product" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${description}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${price}</p>
           
            <a href="./update-product/index.html?p=${doc.id}" class="${createdBy === currentUser.uid ? "block" : "hidden"
            } inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Edit
                 <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>`;
    });
};

// Listen for changes in user authentication state
onAuthStateChanged(auth, (user) => {
    // If user is logged in
    if (user) {
        // Get user ID
        const uid = user.uid;
        // Get user data from Firebase database
        getDoc(doc(db, "users", uid))
            .then((snapshot) => {
                // Extract user data from Firebase document
                const userData = snapshot.data();
                // Get HTML elements to display user data
                const status = document.getElementById("status");
                const phone = document.getElementById("phone");
                // Display user data on the page
                status.innerHTML = userData?.firstName || "";
                phone.innerHTML = userData?.phone || "";
                // Save user data to local storage
                localStorage.setItem(
                    "currentUser",
                    JSON.stringify({ uid, firstName: userData?.firstName })
                );
                // Call function to retrieve all products
                getAllProducts();
            })
            .catch((err) => {
                // Handle error
                console.log(err);
            });
        // Log user ID to console
        console.log(uid, "===> loged in");
    } else {
        // If user is not logged in, redirect to sign in page
        window.location.href = "./auth/signin/index.html";
    }
});

// Get HTML element for logout button
const logout_btn = document.getElementById("logout");

// Add event listener to logout button
logout_btn.addEventListener("click", function () {
    // Sign out user from Firebase authentication
    signOut(auth)
        .then(() => {
            // Remove user data from local storage
            localStorage.removeItem("currentUser");
        })
        .catch((error) => {
            // Handle error
        });
});
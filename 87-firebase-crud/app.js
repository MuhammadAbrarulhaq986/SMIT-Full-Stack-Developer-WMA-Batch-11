// Import the necessary functions from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
    getFirestore, // Get the Firestore database
    collection, // Get a reference to a collection in the database
    addDoc, // Add a new document to a collection
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import {
    getStorage, // Get the Firebase Storage instance
    ref, // Get a reference to a file in Storage
    uploadBytes, // Upload a file to Storage
    getDownloadURL, // Get the download URL for a file in Storage
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8EkvhllVhaNwI_cH-9tpJRHR18kHgiVs",
    authDomain: "my-second-progect-eb4ba.firebaseapp.com",
    databaseURL: "https://my-second-progect-eb4ba-default-rtdb.firebaseio.com",
    projectId: "my-second-progect-eb4ba",
    storageBucket: "my-second-progect-eb4ba.appspot.com",
    messagingSenderId: "381419426435",
    appId: "1:381419426435:web:98e07e3b4bcd993d4441b6"
};

// Initialize the Firebase app
const app = initializeApp(firebaseConfig);

// Get references to the Firestore database, analytics, and storage
const db = getFirestore(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);

// Get a reference to the "products" collection in the database
const productsCollection = collection(db, "products");

// Log the storage instance to the console
console.log(storage);

// Get references to the file input and save button elements
const fileInput = document.getElementById("file-inp");
const save = document.getElementById("save");

// Add an event listener to the save button
save.addEventListener("click", () => {
    // Log the selected files to the console
    console.log(fileInput.files);

    // Check if a file has been selected
    if (!fileInput.files.length) {
        // If not, alert the user to select a file
        return alert("Please choose a file to upload");
    }

    // Get a reference to the selected file
    const file = fileInput.files[0];

    // Create a reference to the file in Storage
    const storageRef = ref(storage, file.name);

    // Upload the file to Storage
    uploadBytes(storageRef, file)
        .then((snapshot) => {
            // Get the download URL for the uploaded file
            getDownloadURL(storageRef).then((url) => {
                // Add a new document to the "products" collection with the file's metadata
                addDoc(productsCollection, {
                    title: "Roses",
                    price: 30,
                    descript: "Roses are fresh",
                    image: url,
                });

                // Log the download URL to the console
                console.log(url, "-->");
            });
        })
        .catch((err) => {
            // Log any errors to the console
            console.log(err, "======");
        });
});
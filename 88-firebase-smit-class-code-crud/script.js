// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase, set, ref, get, remove, update } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWaEGuaZbXjEZXHSEWnucBLWOJ8IhFQJw",
    authDomain: "crudapp-2ae91.firebaseapp.com",
    projectId: "crudapp-2ae91",
    storageBucket: "crudapp-2ae91.appspot.com",
    messagingSenderId: "775317614518",
    appId: "1:775317614518:web:62d26b9ad5ef5b42415b17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-OB-QOWFYgyFWddRRZ5z4nZKKliQslX0",
    authDomain: "my-first-project-2b43e.firebaseapp.com",
    projectId: "my-first-project-2b43e",
    storageBucket: "my-first-project-2b43e.appspot.com",
    messagingSenderId: "135639093489",
    appId: "1:135639093489:web:dafaf6c9c45d6434fd1950"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



function signUpUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log(userCredential.user.uid);
        console.log("====>Sign_Up");

    })
};

const signUp = document.getElementById("signup");
signUp.addEventListener("click", signUpUser);



function signInUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log(userCredential.user.uid);
        console.log("====>Sign_In");

    })

};
const signIn = document.getElementById("signin");
signIn.addEventListener("click", signInUser);

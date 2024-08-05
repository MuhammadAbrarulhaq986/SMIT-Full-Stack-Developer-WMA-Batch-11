// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIDxVzTbR94J31CCNY8ufrj8beu7KSuOE",
    authDomain: "my-first-project-2c12b.firebaseapp.com",
    databaseURL: "https://my-first-project-2c12b-default-rtdb.firebaseio.com",
    projectId: "my-first-project-2c12b",
    storageBucket: "my-first-project-2c12b.appspot.com",
    messagingSenderId: "478886753904",
    appId: "1:478886753904:web:7b186f354dd70dbbc566b5"
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

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase, set, get, ref } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";



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
const db = getDatabase(app);

function writeUserData(userID, name, email) {
    set(ref(db, 'users/' + userID), {
        name: name,
        email: email,
    });
}
writeUserData(4, "johan", "joh@gmail.com");

console.log("Good");

function readData() {
    const userRef = ref(db, 'users');

    get(userRef).then((snapshort) => {
        snapshort.forEach(childsnapShort => {
            console.log(childsnapShort.val());

        })
    })
};
readData();  
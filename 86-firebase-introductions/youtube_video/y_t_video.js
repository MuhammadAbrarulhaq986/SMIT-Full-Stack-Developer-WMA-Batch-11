// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase, set, get, ref } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";



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
const db = getDatabase(app);

function writeUserData(userID, name, email) {
    set(ref(db, 'users/' + userID), {
        name: name,
        email: email,
    });
}
writeUserData(1, "johan", "joh@gmail.com");

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
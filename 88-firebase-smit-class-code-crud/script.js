// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
    getFirestore,
    addDoc,
    collection,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
    // deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

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
const analytics = getAnalytics(app);
const db = getFirestore(app);

const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const loader = document.getElementById("loader");
const createBtn = document.getElementById("create");

const productsCollection = collection(db, "products");

const createProduct = async () => {
    if (!title.value || !description.value || !price.value) {
        return alert("all fields are required");
    }
    try {
        loader.style.display = "block";
        const docRef = await addDoc(productsCollection, {
            title: title.value,
            description: description.value,
            price: price.value,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    } finally {
        loader.style.display = "none";
    }
};

createBtn.addEventListener("click", createProduct);

const getData = async () => {
    const querySnapshot = await getDocs(productsCollections);
    console.log(querySnapshot);
    const products = [];
    querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        products.push(doc.data());
    });
    console.log(products);
};

const deleteProduct = async () => {
    try {
        const docRef = doc(db, "test", "PRdb0ufwRmm1XkxQ");
        const res = await deleteDoc(docRef);
        console.log(res, "=====>success");
    } catch (err) {
        console.log(err.message, "error");
    }
};

const updateProduct = async () => {
    const testRef = doc(db, "products", "eCPW7579GLKFi1OMJKR6");
    try {
        const res = await updateDoc(testRef, {
            number: null,
        });
        console.log(res, "=====>success");
    } catch (err) {
        console.log(err.message, "error");
    }
};

updateProduct();

deleteData();
getData();
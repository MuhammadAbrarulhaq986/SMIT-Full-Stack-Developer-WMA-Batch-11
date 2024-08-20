// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import {
    getFirestore,
    addDoc,
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

// Define Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyAbGzODQus_pJi_V7vXF2pB4B5Ah7mo6v8",
    authDomain: "e-commerce-store-80c43.firebaseapp.com",
    databaseURL: "https://e-commerce-store-80c43-default-rtdb.firebaseio.com",
    projectId: "e-commerce-store-80c43",
    storageBucket: "e-commerce-store-80c43.appspot.com",
    messagingSenderId: "305426805273",
    appId: "1:305426805273:web:3c936db7a27c7acaebf088"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
    app,
    auth,
    onAuthStateChanged,
    db,
    createUserWithEmailAndPassword,
    addDoc,
    setDoc,
    doc,
    collection,
    signOut,
    signInWithEmailAndPassword,
    getDoc,
    storage,
    ref,
    getDownloadURL,
    uploadBytes,
    getDocs,
};
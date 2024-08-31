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
    apiKey: "AIzaSyA80MfxcDbA7wI7ossmIcDnPpHLW4NcynU",
    authDomain: "traval-blogs.firebaseapp.com",
    projectId: "traval-blogs",
    storageBucket: "traval-blogs.appspot.com",
    messagingSenderId: "115259394454",
    appId: "1:115259394454:web:6cdf0b1b59a80e486b75b7"
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
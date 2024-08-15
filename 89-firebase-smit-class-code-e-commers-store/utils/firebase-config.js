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
    // API key for Firebase project
    apiKey: "AIzaSyAbGzODQus_pJi_V7vXF2pB4B5Ah7mo6v8",
    // Authentication domain for Firebase project
    authDomain: "e-commerce-store-80c43.firebaseapp.com",
    // Database URL for Firebase project
    databaseURL: "https://e-commerce-store-80c43-default-rtdb.firebaseio.com",
    // Project ID for Firebase project
    projectId: "e-commerce-store-80c43",
    // Storage bucket for Firebase project
    storageBucket: "e-commerce-store-80c43.appspot.com",
    // Messaging sender ID for Firebase project
    messagingSenderId: "305426805273",
    // App ID for Firebase project
    appId: "1:305426805273:web:3c936db7a27c7acaebf088"
};

// Initialize Firebase app with configuration object
const app = initializeApp(firebaseConfig);

// Get authentication instance for Firebase app
const auth = getAuth(app);

// Get Firestore instance for Firebase app
const db = getFirestore(app);

// Get storage instance for Firebase app
const storage = getStorage(app);

// Export necessary Firebase modules and instances
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
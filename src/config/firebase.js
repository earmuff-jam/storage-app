// JavaScript
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIbxFGeL787XAYdJYW72BfHbeiM_MJZlI",
  authDomain: "storage-a4f2d.firebaseapp.com",
  projectId: "storage-a4f2d",
  storageBucket: "storage-a4f2d.appspot.com",
  messagingSenderId: "229474099870",
  appId: "1:229474099870:web:d73663f7add0b0ca40518f",
  measurementId: "G-901X4L2DMB"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}
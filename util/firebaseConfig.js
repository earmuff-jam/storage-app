// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIbxFGeL787XAYdJYW72BfHbeiM_MJZlI",
  authDomain: "storage-a4f2d.firebaseapp.com",
  projectId: "storage-a4f2d",
  storageBucket: "storage-a4f2d.appspot.com",
  messagingSenderId: "229474099870",
  appId: "1:229474099870:web:964b4a8610898edd40518f",
  measurementId: "G-DJSXYRBPTQ",
};
 
initializeApp(firebaseConfig);

export const db = getFirestore(); // init the db
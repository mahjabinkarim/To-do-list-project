// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCL3tSrbQmlfe4d3dJa548Jz1PJnY5T6ME",
    authDomain: "to-do-list-90566.firebaseapp.com",
    databaseURL: "https://to-do-list-90566-default-rtdb.asia-southeast1.firebasedatabase.app", // Add this line
    projectId: "to-do-list-90566",
    storageBucket: "to-do-list-90566.appspot.com", // Corrected storage bucket URL
    messagingSenderId: "1090079630226",
    appId: "1:1090079630226:web:680a686e0bb7899ca8574b",
    measurementId: "G-J9FMG7H1NN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
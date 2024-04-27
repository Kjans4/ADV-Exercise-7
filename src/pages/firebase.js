// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDewS_OwUGOWmrRdvAHBD747OCGaBmXPpA",
  authDomain: "exercise-7-adv.firebaseapp.com",
  projectId: "exercise-7-adv",
  storageBucket: "exercise-7-adv.appspot.com",
  messagingSenderId: "948490468974",
  appId: "1:948490468974:web:dfa31a97e610ff68f4f07f",
  measurementId: "G-N42BWH57ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
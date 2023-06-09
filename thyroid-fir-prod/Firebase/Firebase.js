// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdOedi2RAlMWycTH6trla1yQpTggfroDQ",

  authDomain: "thyroidhq.firebaseapp.com",

  databaseURL: "https://thyroidhq-default-rtdb.firebaseio.com",

  projectId: "thyroidhq",

  storageBucket: "thyroidhq.appspot.com",

  messagingSenderId: "67209342104",

  appId: "1:67209342104:web:2fce8a68ddbdddae8e34ed",

  measurementId: "G-33GXTNERFC",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();

export default app;

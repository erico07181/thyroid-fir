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
  apiKey: "AIzaSyAApOQFKPU8hi4MLceClHksSSQRnIVmgws",
  authDomain: "thyroidhq-dev.firebaseapp.com",
  databaseURL: "https://thyroidhq-dev-default-rtdb.firebaseio.com",
  projectId: "thyroidhq-dev",
  storageBucket: "thyroidhq-dev.appspot.com",
  messagingSenderId: "422852207482",
  appId: "1:422852207482:web:b0cb7c711f4057246d2cc3",
  measurementId: "G-W9VNBQB0C3",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();

export default app;

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvj0MFmLQd28Je8AhqU_uohge5ggebtUU",
  authDomain: "insta-21580.firebaseapp.com",
  projectId: "insta-21580",
  storageBucket: "insta-21580.appspot.com",
  messagingSenderId: "445041852302",
  appId: "1:445041852302:web:8953067d1c1237294a2edf",
  measurementId: "G-79KZ67WZ12"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


const analytics = getAnalytics(app);

export {app, db, storage};
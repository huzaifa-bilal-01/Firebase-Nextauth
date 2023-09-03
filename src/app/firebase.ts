// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCarjoIT1u-R0oM__438CYKw96lcP9fPMw",
  authDomain: "next-firebase-62e53.firebaseapp.com",
  projectId: "next-firebase-62e53",
  storageBucket: "next-firebase-62e53.appspot.com",
  messagingSenderId: "487878523458",
  appId: "1:487878523458:web:43c469ac08a81fddea4bdb"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
export {app,db}
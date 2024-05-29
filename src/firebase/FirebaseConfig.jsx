// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ_z3kErp2axp3eN5P1WXtgYVplhfISbg",
  authDomain: "nonstop-82607.firebaseapp.com",
  projectId: "nonstop-82607",
  storageBucket: "nonstop-82607.appspot.com",
  messagingSenderId: "515886584993",
  appId: "1:515886584993:web:e3675461713cda84d80ce0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth } //ab ap in dino ko ksi bhi use kr skta
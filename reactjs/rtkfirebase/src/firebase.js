// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDMtpOvxSa4MX7tFB_XduRQHkuzr0HQ8UA",
  authDomain: "febreactdemo.firebaseapp.com",
  projectId: "febreactdemo",
  storageBucket: "febreactdemo.firebasestorage.app",
  messagingSenderId: "117664405017",
  appId: "1:117664405017:web:201f09c00d33be281abc88",
  measurementId: "G-DJGT8XS3CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }
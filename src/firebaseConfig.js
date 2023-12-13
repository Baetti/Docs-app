// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBj4BXaD4FRViiQmZqu0n4WKFGUDyFFrTA",
  authDomain: "docs-clone-c946d.firebaseapp.com",
  projectId: "docs-clone-c946d",
  storageBucket: "docs-clone-c946d.appspot.com",
  messagingSenderId: "898414675866",
  appId: "1:898414675866:web:f6dd3c84f62cdc8e019c23",
  measurementId: "G-EN8FQ3Q52V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nitian-blog.firebaseapp.com",
  projectId: "nitian-blog",
  storageBucket: "nitian-blog.appspot.com",
  messagingSenderId: "305591551026",
  appId: "1:305591551026:web:f9d7a69d3124532c17682b",
  measurementId: "G-6TEQ1QJ1QR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFGS1xs_-lK-LGoKh6ghMX_30SFt5QmD4",
  authDomain: "paymate-d9782.firebaseapp.com",
  projectId: "paymate-d9782",
  storageBucket: "paymate-d9782.firebasestorage.app",
  messagingSenderId: "370802397645",
  appId: "1:370802397645:web:f705c148ada605f1a47484",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

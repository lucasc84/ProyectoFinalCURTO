// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmUtXLoS14zso-jC3EuLFDGQr5Nt086uU",
  authDomain: "coder-flex-81735-curto.firebaseapp.com",
  projectId: "coder-flex-81735-curto",
  storageBucket: "coder-flex-81735-curto.firebasestorage.app",
  messagingSenderId: "786188448613",
  appId: "1:786188448613:web:fa221d6b684cf13902278c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
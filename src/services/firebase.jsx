import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmUtXLoS14zso-jC3EuLFDGQr5Nt086uU",
  authDomain: "coder-flex-81735-curto.firebaseapp.com",
  projectId: "coder-flex-81735-curto",
  storageBucket: "coder-flex-81735-curto.firebasestorage.app",
  messagingSenderId: "786188448613",
  appId: "1:786188448613:web:fa221d6b684cf13902278c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

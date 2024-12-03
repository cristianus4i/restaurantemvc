
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMYxKwfhGKw4gKDWMRGug0YHPrEmiOtHI",
  authDomain: "projetofinal-90da5.firebaseapp.com",
  projectId: "projetofinal-90da5",
  storageBucket: "projetofinal-90da5.firebasestorage.app",
  messagingSenderId: "745912833052",
  appId: "1:745912833052:web:5c4348559666ec734b3bd9",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Sua configuração do Firebase (substitua com suas próprias chaves do Firebase)
const firebaseConfig = {
    apiKey: "AIzaSyBMYxKwfhGKw4gKDWMRGug0YHPrEmiOtHI",
    authDomain: "projetofinal-90da5.firebaseapp.com",
    projectId: "projetofinal-90da5",
    storageBucket: "projetofinal-90da5.firebasestorage.app",
    messagingSenderId: "745912833052",
    appId: "1:745912833052:web:5c4348559666ec734b3bd9"
  };

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };

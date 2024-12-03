// js/auth.js
import { auth } from "./firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

document.getElementById("login-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login realizado com sucesso!");
        window.location.href = "dashboard.html";
    } catch (error) {
        document.getElementById("error-message").innerText =
            "Erro no login: " + error.message;
    }
});

import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getFirestore, collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBMYxKwfhGKw4gKDWMRGug0YHPrEmiOtHI",
    authDomain: "projetofinal-90da5.firebaseapp.com",
    projectId: "projetofinal-90da5",
    storageBucket: "projetofinal-90da5.firebasestorage.app",
    messagingSenderId: "745912833052",
    appId: "1:745912833052:web:5c4348559666ec734b3bd9"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Carregar pratos no dashboard
const pratosList = document.getElementById("pratosList");

async function loadPratos() {
  const pratosRef = collection(db, 'pratos');
  const snapshot = await getDocs(pratosRef);
  const pratos = snapshot.docs.map(doc => doc.data());
  
  pratosList.innerHTML = ""; // Limpar lista existente

  pratos.forEach(prato => {
    const pratoDiv = document.createElement("div");
    pratoDiv.classList.add("card", "mb-3");

    pratoDiv.innerHTML = `
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${prato.imagem}" class="img-fluid rounded-start" alt="${prato.nome}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${prato.nome}</h5>
            <p class="card-text">${prato.descricao}</p>
            <p class="card-text"><strong>R$ ${prato.preco}</strong></p>
          </div>
        </div>
      </div>
    `;

    pratosList.appendChild(pratoDiv);
  });
}

// Função para adicionar prato
const addPratoForm = document.getElementById("addPratoForm");

addPratoForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const nome = document.getElementById('nomePrato').value;
  const descricao = document.getElementById('descricaoPrato').value;
  const preco = document.getElementById('precoPrato').value;
  const imagem = document.getElementById('imagemPrato').value;

  try {
    await addDoc(collection(db, 'pratos'), {
      nome,
      descricao,
      preco: parseFloat(preco),
      imagem
    });
    alert("Prato adicionado com sucesso!");
    loadPratos(); // Atualiza a lista de pratos
    document.getElementById("addPratoModal").querySelector(".btn-close").click(); // Fecha o modal
  } catch (error) {
    console.error("Erro ao adicionar prato: ", error);
  }
});

// Carregar os pratos ao abrir o dashboard
loadPratos();

// Inicializando o Firebase e Firestore
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
<script src="/dashboard.js"></script>

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBMYxKwfhGKw4gKDWMRGug0YHPrEmiOtHI",
  authDomain: "projetofinal-90da5.firebaseapp.com",
  projectId: "projetofinal-90da5",
  storageBucket: "projetofinal-90da5.appspot.com",
  messagingSenderId: "745912833052",
  appId: "1:745912833052:web:5c4348559666ec734b3bd9"
};

// Inicializando o Firebase App e Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Pegando o formulário de adicionar prato e o local para listar pratos
const addPratoForm = document.getElementById('addPratoForm');
const pratosList = document.getElementById('pratosList');

// Função para carregar pratos
async function carregarPratos() {
  try {
    // Limpar a lista de pratos
    pratosList.innerHTML = '';

    // Buscar todos os pratos no Firestore
    const querySnapshot = await getDocs(collection(db, 'pratos'));
    querySnapshot.forEach((doc) => {
      const prato = doc.data();
      const pratoElement = document.createElement('div');
      pratoElement.classList.add('card', 'mt-3');
      pratoElement.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${prato.nome}</h5>
          <p class="card-text">${prato.descricao}</p>
          <p class="card-text">Preço: R$ ${prato.preco}</p>
          <img src="${prato.imagem}" alt="${prato.nome}" class="img-fluid" />
        </div>
      `;
      pratosList.appendChild(pratoElement);
    });
  } catch (error) {
    console.error("Erro ao carregar pratos", error);
  }
}

// Função para adicionar prato no banco de dados e atualizar a lista no frontend
addPratoForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Impede o envio do formulário

  const nome = document.getElementById('nomePrato').value;
  const descricao = document.getElementById('descricaoPrato').value;
  const preco = document.getElementById('precoPrato').value;
  const imagem = document.getElementById('imagemPrato').value;

  try {
    // Adicionando prato no Firestore
    await addDoc(collection(db, 'pratos'), {
      nome,
      descricao,
      preco,
      imagem
    });

    // Carregar os pratos novamente
    carregarPratos();

    // Fechar o modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addPratoModal'));
    modal.hide();

    // Limpar os campos do formulário
    addPratoForm.reset();
  } catch (error) {
    console.error("Erro ao adicionar prato", error);
  }
});

// Carregar os pratos ao carregar a página
carregarPratos();

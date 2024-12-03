import admin from 'firebase-admin';

// Inicializando o Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp();
}

const firestore = admin.firestore(); // Acessando o Firestore

// Restante do código...


export const getPratos = async (req, res) => {
  try {
    const pratosRef = firestore.collection('pratos'); // Use firestore diretamente
    const snapshot = await pratosRef.get();
    const pratos = snapshot.docs.map(doc => doc.data());
    res.status(200).json(pratos);
  } catch (error) {
    res.status(500).send("Erro ao obter pratos");
  }
};

export const addPrato = async (req, res) => {
  try {
    const { nome, descricao, preco, imagem } = req.body;
    await firestore.collection('pratos').add({ nome, descricao, preco, imagem });
    res.status(201).send("Prato adicionado com sucesso");
  } catch (error) {
    res.status(500).send("Erro ao adicionar prato");
  }
};

export const updatePrato = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, preco, imagem } = req.body;
  try {
    const pratoRef = firestore.collection('pratos').doc(id);
    await pratoRef.update({ nome, descricao, preco, imagem });
    res.status(200).send("Prato atualizado com sucesso");
  } catch (error) {
    res.status(500).send("Erro ao atualizar prato");
  }
};

export const deletePrato = async (req, res) => {
  const { id } = req.params;
  try {
    await firestore.collection('pratos').doc(id).delete();
    res.status(200).send("Prato deletado com sucesso");
  } catch (error) {
    res.status(500).send("Erro ao deletar prato");
  }
};

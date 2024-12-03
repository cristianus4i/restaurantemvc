import { db } from "../firebaseConfig.js";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

// Criar um novo pedido
export async function createPedido(pedido) {
    const docRef = await addDoc(collection(db, "pedidos"), pedido);
    return docRef.id;
}

// Obter todos os pedidos
export async function getPedidos() {
    const querySnapshot = await getDocs(collection(db, "pedidos"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Atualizar um pedido
export async function updatePedido(id, updatedData) {
    const pedidoRef = doc(db, "pedidos", id);
    await updateDoc(pedidoRef, updatedData);
}

// Deletar um pedido
export async function deletePedido(id) {
    const pedidoRef = doc(db, "pedidos", id);
    await deleteDoc(pedidoRef);
}

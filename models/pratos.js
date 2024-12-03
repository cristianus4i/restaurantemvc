// routes/pratos.js
import express from "express";
import { createPrato, getPratos, updatePrato, deletePrato } from "./pratos.js";

const router = express.Router();

// Criar prato
router.post("/", async (req, res) => {
  try {
    const prato = req.body;
    await createPrato(prato);
    res.status(201).send("Prato criado com sucesso!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Obter pratos
router.get("/", async (req, res) => {
  try {
    const pratos = await getPratos();
    res.json(pratos);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Atualizar prato
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const prato = req.body;
    await updatePrato(id, prato);
    res.send("Prato atualizado com sucesso!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Excluir prato
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deletePrato(id);
    res.send("Prato excluído com sucesso!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;

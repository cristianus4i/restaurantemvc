
import express from "express";
import { createUsuario, getUsuarios } from "./usuarios.js";

const router = express.Router();

// Criar usuário
router.post("/", async (req, res) => {
  try {
    const usuario = req.body;
    await createUsuario(usuario);
    res.status(201).send("Usuário criado com sucesso!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Obter usuários
router.get("/", async (req, res) => {
  try {
    const usuarios = await getUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;

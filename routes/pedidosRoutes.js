import express from "express";
import { createPedido, getPedidos, updatePedido, deletePedido } from "../controllers/pedidosController.js";

const router = express.Router();

router.post("/pedidos", createPedido);
router.get("/pedidos", getPedidos);
router.put("/pedidos/:id", updatePedido);
router.delete("/pedidos/:id", deletePedido);

export default router;

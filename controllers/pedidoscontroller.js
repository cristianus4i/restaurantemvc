import { createPedido as create, getPedidos as get, updatePedido as update, deletePedido as remove } from "../models/pedidos.js";

export async function createPedido(req, res) {
    try {
        const id = await create(req.body);
        res.status(201).json({ id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getPedidos(req, res) {
    try {
        const pedidos = await get();
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function updatePedido(req, res) {
    try {
        await update(req.params.id, req.body);
        res.status(200).send("Pedido atualizado com sucesso.");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function deletePedido(req, res) {
    try {
        await remove(req.params.id);
        res.status(200).send("Pedido deletado com sucesso.");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

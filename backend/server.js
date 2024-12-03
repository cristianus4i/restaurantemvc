
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pratosRouter from "./routes/pratos.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rotas principais
app.use("/api/pratos", pratosRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { getPratos, addPrato, updatePrato, deletePrato } from './controllers/pratoController.js';

const app = express();
const port = 3000;

// Obter o diretório atual usando import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Usando middlewares
app.use(cors());
app.use(express.json());

// Servindo arquivos estáticos da pasta 'public'
app.use(express.static(join(__dirname, 'public')));

// Definindo as rotas de pratos
app.get('/pratos', getPratos);
app.post('/pratos', addPrato);
app.put('/pratos/:id', updatePrato);
app.delete('/pratos/:id', deletePrato);

// Rota inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao restaurante!');
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

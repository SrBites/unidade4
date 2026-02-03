require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./src/routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/biblioteca';

//parse do JSON
app.use(express.json());

// Conexão com MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('Conectado ao MongoDB com sucesso'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Rotas
app.use('/api/livros', bookRoutes);

// Rota base de teste
app.get('/', (req, res) => {
    res.send('API de Livros rodando');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
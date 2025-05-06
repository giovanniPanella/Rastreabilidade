const express = require('express');
const mongoose = require('mongoose');
const rastreioRoutes = require('./routes/rastreioRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro ao conectar:', err));

// Rotas
app.use('/api', rastreioRoutes);

// Servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
const mongoose = require('mongoose');

const rastreioSchema = new mongoose.Schema({
  nomeFilial: String,
  nomeFazenda: String,
  localizacao: String,
  produto: String,
  quantidade: Number,
  dataColheita: Date,
  dataProcessamento: Date,
  numeroLoteFilial: { type: String, unique: true },
  numeroLoteProdutoFinal: { type: String, default: null },
});

module.exports = mongoose.model('Rastreio', rastreioSchema);
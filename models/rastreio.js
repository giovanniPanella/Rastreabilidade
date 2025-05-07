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


  numeroFuncionarios: Number,
  agriculturaRegenerativa: Boolean,
  usoEnergiasRenovaveis: Boolean,
  gestaoAguaSolo: Boolean,
  reducaoAgrotoxicos: Boolean,
  preservacaoBiodiversidade: Boolean
});

module.exports = mongoose.model('Rastreio', rastreioSchema);
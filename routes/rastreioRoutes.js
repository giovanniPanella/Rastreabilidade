const express = require('express');
const router = express.Router();
const Rastreio = require('../models/rastreio');

// Criar um novo rastreio com ESG
router.post('/cadastro', async (req, res) => {
  try {
    const novo = new Rastreio(req.body);
    await novo.save();
    res.status(201).json(novo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Atualizar lote final
router.patch('/inserir-lote-final/:numeroLoteFilial', async (req, res) => {
  try {
    const { numeroLoteProdutoFinal } = req.body;
    const atualizado = await Rastreio.findOneAndUpdate(
      { numeroLoteFilial: req.params.numeroLoteFilial },
      { numeroLoteProdutoFinal },
      { new: true }
    );
    if (!atualizado) return res.status(404).json({ error: 'Lote não encontrado' });
    res.json(atualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Consultar por lote final
router.get('/rastreio/:numeroLoteProdutoFinal', async (req, res) => {
  try {
    const rastreio = await Rastreio.findOne({ numeroLoteProdutoFinal: req.params.numeroLoteProdutoFinal });
    if (!rastreio) return res.status(404).json({ error: 'Lote não encontrado' });
    res.json(rastreio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;


const express = require('express');
const router = express.Router();
const Rastreio = require('../models/Rastreio');

// 1. Cadastrar dados iniciais (feito pela filial)
router.post('/cadastro', async (req, res) => {
  try {
    const novoRastreio = new Rastreio(req.body);
    await novoRastreio.save();
    res.status(201).json(novoRastreio);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 2. Atualizar lote do produto final (feito pelo cliente)
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

// 3. Consultar por lote do produto final (cliente final via QR Code)
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
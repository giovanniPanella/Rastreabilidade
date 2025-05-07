📦 API de Rastreamento de Produto com ESG

http://localhost:5001/api
Ou no Render:


https://<seu-projeto>.onrender.com/api
📌 POST /cadastro
Cadastra um novo produto com informações ESG.

Body (JSON):
{
  "nomeFilial": "Unidade SP",
  "nomeFazenda": "Fazenda Boa Esperança",
  "localizacao": "Itapeva - SP",
  "produto": "Café Arábica",
  "quantidade": 1000,
  "dataColheita": "2025-05-05",
  "dataProcessamento": "2025-05-06",
  "numeroLoteFilial": "FZ1234",
  "agriculturaRegenerativa": true,
  "usoEnergiasRenovaveis": true,
  "gestaoAguaSolo": "Sistema de gotejamento",
  "reducaoAgrotoxicos": "Uso controlado certificado",
  "preservacaoBiodiversidade": "Reserva legal mantida",
  "numeroFuncionarios": 8
}
🛠 PATCH /inserir-lote-final/:numeroLoteFilial
Atualiza o registro com o número do lote final.

{
  "numeroLoteProdutoFinal": "PROD9876"
}
🔍 GET /rastreio/:numeroLoteProdutoFinal
Consulta todas as informações do produto via número do lote final
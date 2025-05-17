import express from 'express';
import cors from 'cors';
import pool from './db.js';  

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/cesta/:id', async (req, res) => {
  const { id } = req.params;
  const { produtos } = req.body;

  if (!produtos || !Array.isArray(produtos)) {
    return res.status(400).json({ erro: 'Produtos inválidos. Deve ser um array.' });
  }

  try {
    await pool.query('DELETE FROM carrinho WHERE id_cesta = $1', [id]);

    for (const produto of produtos) {
      if (!produto.nome || !produto.preco) {
        return res.status(400).json({ erro: 'Produto inválido, falta nome ou preco.' });
      }
      await pool.query(
        'INSERT INTO carrinho (id_cesta, nome, preco) VALUES ($1, $2, $3)',
        [id, produto.nome, produto.preco]
      );
    }

    res.json({ mensagem: 'Cesta salva com sucesso!' });
  } catch (err) {
    console.error('Erro no POST /api/cesta/:id', err);
    res.status(500).json({ erro: 'Erro interno ao salvar cesta' });
  }
});

app.get('/api/cesta/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const { rows } = await pool.query('SELECT nome, preco FROM carrinho WHERE id_cesta = $1', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ erro: 'Cesta não encontrada' });
    }

    res.json({ produtos: rows });
  } catch (err) {
    console.error('Erro no GET /api/cesta/:id', err);
    res.status(500).json({ erro: 'Erro interno ao buscar cesta' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em ${port}`);
});

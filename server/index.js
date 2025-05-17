const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const cestas = {};

app.post('/api/cesta/:id', (req, res) => {
    const { id } = req.params;
    const { produtos } = req.body;
    cestas[id] = produtos;
    res.json({ mensagem: 'Cesta salva com sucesso!' });
});

app.get('/api/cesta/:id', (req, res) => {
    const { id } =req.params;
    if (!cestas[id]) {
        return res.status(404).json({ erro: 'Cesta não encontrada' });
    }
    res.json ({ produtos: cestas[id] });
});

app.listen(port, () => {
    console.log(`servidor rodando em ${port}`);
})
const express = require('express');
const Produto = require('./models/produto');
const cors = require('cors');
const server = express();

require('dotenv').config();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const Produtos = require('./models/produto');

// Listar os produtos
server.get('/produtos', async (req, res) => {
  try {
    const result = await Produtos.find();
    res.json(result);
  } catch (err) {
    res.send('Error: ' + err);
  }
});

// Adiciona os produtos
server.post('/produtos', async (req, res) => {
  const { title, description, value, quantity } = req.body;

  try {
    const result = await Produtos.create({
      title,
      description,
      value,
      quantity,
    });
    res.json(result);
  } catch (err) {
    res.send('Error: ' + err);
  }
});

// Altera os produtos
server.put('/produtos/:id', async (req, res) => {
  try {
    const produtoId = await Produtos.findById(req.params.id);
    produtoId.title = req.body.title;
    produtoId.description = req.body.description;
    produtoId.value = req.body.value;
    produtoId.quantity = req.body.quantity;

    const produtoAlterado = await produtoId.save();
    res.json(produtoAlterado);
  } catch (err) {
    res.status(400).send('Error: ' + err);
  }
});

// Deleta os produtos
server.delete('/produtos/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const result = await Produtos.findByIdAndDelete(_id);
    res.json(result);
  } catch (err) {
    res.status(400).send('Error: ' + err);
  }
});

server.listen(process.env.PORT || 3000, () => {
  console.log('Express started at http://localhost:3000');
});

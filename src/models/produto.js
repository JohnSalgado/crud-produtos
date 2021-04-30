const mongoose = require('../database');

const ProdutoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;

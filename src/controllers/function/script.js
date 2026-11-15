const produtos = require('../../../database/produtosCadastros.json');

const tabelaProduto = produtos.Produto.map((item) => item.nome);
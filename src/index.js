const express = require('express');
const routes = express();
routes.use(express.json())
const produtosCadastrados = require('../database/produtosCadastros.json')

routes.get('/home', (req, res) => {
    res.send("Pegou");
});

routes.get('/produtos', (req, res) => {
    return res.status(200).json(produtosCadastrados.Produto);
});

routes.post('/adicionarProdutos', (req, res) => {
   const { nome, quantidade, valor, fornecedor, cadastro_produto } = req.body;

   if(Number(quantidade) < 0 || Number(valor) < 0){
    return res.status(400).json({mensagem: `Erro: valor não permitido!`})
   }

   produtosCadastrados.Produto.push({nome, quantidade, valor, fornecedor, cadastro_produto});
   return res.status(201).json({mensagem:"produto cadaastrado!"});
});

module.exports = routes;
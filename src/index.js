const express = require('express');
const routes = express();
routes.use(express.json())
const produtosCadastrados = require('../database/produtosCadastros.json')

routes.get('/home', (req, res) => {
    res.send("Pegou");
});

routes.get('/produtos', (req, res) => {
    return res.json(produtosCadastrados);
})

module.exports = routes;
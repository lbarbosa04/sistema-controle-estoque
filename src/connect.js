const express = require('express');
const app = express();

const routes = require('./index');

const port = 3585;

app.listen(port, () => { console.log("Servidor rodando"); })

app.use(routes);

const idade = "subir";
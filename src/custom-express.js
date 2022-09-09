const express = require('express');
const app = express();

const rotas = require('./router');
app.use('/',rotas)

module.exports =app;
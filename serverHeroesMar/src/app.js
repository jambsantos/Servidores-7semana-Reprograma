const express = require('express');
const app = express();

const index = require('./routes/index')
const heroesM = require('./routes/heroesMRoute')

app.use((req,res, next)=> {
console.log('Nova requisicao realizada')

next()
});

app.use('/', index);
app.use('/heroes', heroesM)

module.exports = app; 
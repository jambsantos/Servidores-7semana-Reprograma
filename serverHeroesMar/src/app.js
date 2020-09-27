const express = require('express');
const app = express();

const index = require('./routes/index')
const heroes = require('./routes/heroesRoute')

app.use((req,res, next)=> {
console.log('Nova requisicao realizada')

next()
});

app.use('/', index);
app.use('/heroes', heroes)

module.exports = app; 
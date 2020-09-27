const express = require('express');
const app = express();

const index = require('./routes/index')
const mutantesM = require('./routes/mutantesMRoute')

app.use((req,res, next)=> {
    console.log("Nova requisicao realizada")

    next();
});

app.use('/',index);
app.use('/mutantes', mutantesM)

module.exports = app;
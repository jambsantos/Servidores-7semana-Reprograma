const express = require('express');
const app = express();

const index = require('./routes/index');
const programarF = require('./routes/programarFRoute');

app.use((req,res,next)=> {
    console.log("NOVA REQUISICAO SOLICITADA");

    next()
});

app.use('/',index);
app.use('/programar', programarF);

module.exports = app;
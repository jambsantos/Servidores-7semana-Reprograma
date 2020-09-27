const express = require('express');
const app = express();

const index = require('./routes/index');
const atalhos = require ('./routes/atalhosVSCRoute')
app.use((req,res,next)=>{
    console.log("Nova requisicao realizada");

    next()
});

app.use('/', index);
app.use('/atalhos',atalhos)
module.exports = app;
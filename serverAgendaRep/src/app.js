const express = require ('express');
const app = express();

const index = require('./routes/index');
const agenda = require('./routes/agendaRoute');


app.use((req,res,next)=> {
    console.log(`Nova requisicao realizada`);

    next()
})

app.use('/', index);
app.use('/agenda', agenda)

module.exports = app;
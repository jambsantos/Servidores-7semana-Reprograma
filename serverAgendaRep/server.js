const app = require('./src/app');
const porta = 8080;

app.listen(porta, ()=> {
    console.log(`O SERVIDOR ESTÁ RODANDO ${porta}`) //query string 
});
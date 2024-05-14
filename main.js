//
const express = require('express');
const { createConnection } = require('net');
const path = require('path');
const app = express();
const port = 6065;
const dao = require('./database/dao')
app.use(express.urlencoded({extended: true}))
// Define uma rota para a página inicial
app.get('/', (req, res) => {
    res.json({ 'Status': 'OK' });
});

// Define a pasta onde os arquivos estáticos estão localizados
const pastaEstática = path.join(__dirname, 'public');

// Define a rota para servir arquivos estáticos a partir da pasta definida
app.use(express.static(pastaEstática));

// Define uma rota para a página index.html
app.get('/index', (req, res) => {
    res.sendFile(path.join(pastaEstática, 'index.html'));
});

//Rota para o cadastro
app.get('/cadastro', (req,res) => {
    res.sendFile(path.join(pastaEstática, 'cadastro.html'))
})

//Rota para login
app.get('/login', (req,res) => res.sendFile(path.join(pastaEstática, 'login.html')))
//puxa da pag cadastro
app.post('/cadastro' , (req , res) =>{
    // const dados = {
    //     requisisa:nomeInput ,senha:'senha',email:'email',uf:'uf',cidade:'cidade',cep:123
    // }
    
    // const requisisao = req.body
    const dados = {                     //faz a requisição do corpo, do item com atributo name
        login: req.body.nomeInput , email: req.body.emailInput
    }
    dao.addUser(dados , (result , err)=>{
    }) 
    res.send("foi")
}
)

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

//nome:nome,senha:senha,email:email,estado:estado,cidade:cidade,cep:cep,rua:rua,complemento:complemento,numero:numero


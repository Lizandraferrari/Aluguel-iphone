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

app.get('/login', (req,res) => res.sendFile(path.join(pastaEstática, 'login.html')))

//Rota para o cadastro
app.get('/cadastro', (req,res) => {
    res.sendFile(path.join(pastaEstática, 'cadastro.html'))
})

//Rota para login

//puxa da pag cadastro
app.post('/cadastro' , (req , res) =>{    
    let senhaVar1 = req.body.senhaInput1
    let senhaVar2 = req.body.senhaInput2
    if (senhaVar1 == senhaVar2){
        const dados = {               //faz a requisição, do corpo, do item com atributo "name" req.body.name
            login: req.body.nomeInput , email: req.body.emailInput , senha: senhaVar1
        }
        dao.addUser(dados , (result , err)=>{
        }) 
        //res.sendFile(path.join(pastaEstática , 'login.html')) 
        res.redirect('/login')
}else{
    res.send('As senhas precisam ser iguais!!')
}
})
// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

//nome:nome,senha:senha,email:email,estado:estado,cidade:cidade,cep:cep,rua:rua,complemento:complemento,numero:numero


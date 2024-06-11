const express = require('express');
const router = express.Router();
const data = require('../database/dao');
const session = require('express-session');

router.use(session({
    secret: '1234', 
    resave: false,
    saveUninitialized: true
}));

router.get('/', (req, res) => {
    res.render('home.ejs');
});

router.get('/cadastro', (req, res) => {
    res.render('cadastro.ejs', { error: req.query.error });
});

router.get('/login', (req, res) => { 
    res.render('login.ejs', { error: req.query.error });
});

router.post('/login', (req, res) => {
    const { email, senha } = req.body;
    data.getUserByEmailAndPassword(email, senha, (error, user) => {
        if (error || !user) {
            return res.redirect('/login?error=Invalid credentials');
        }
        req.session.user = user;
        res.redirect('/produtos');
    });
});

router.get('/users', (req, res) => {
    data.getAllUsers((error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send("Error retrieving users");
            return;
        }
        res.json(result);
    });
});

router.post('/cadastro', (req, res) => {
    const { nome, email, senha, telefone, cep, rua, numero, cidade, uf, cpf, complemento } = req.body;
    data.addUser({ nome, email, senha, telefone, cep, rua, numero, cidade, uf, cpf, complemento }, (error) => {
        if (error) {
            console.log("Erro:   ", error);
            res.redirect('/cadastro?error=error');
            return;
        }
        res.redirect('/login');
    });
});

router.get('/usuariologado', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    res.render('logado.ejs', { user: req.session.user });
});

router.get('/produtos', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    res.render('produtos.ejs', { user: req.session.user });
});

router.post('/aluguel', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    const { produto, especificacoes, tempo } = req.body;
    const user = req.session.user;
    res.render('aluguel.ejs', { user, produto, especificacoes, tempo });
});


router.post('/confirmar-aluguel', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    const { produto, especificacoes, tempo } = req.body;
    const user = req.session.user;
    const dados = {
        user: user, 
        produto,
        especificacoes,
        tempo
    };

    data.addRental(dados, (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).send("Erro ao processar o aluguel");
        }
        // res.render('confirmacao.ejs', { produto, especificacoes, tempo, userNome: user.nome })
        res.render('confirmacao.ejs', {produto, especificacoes, tempo, user})
    });
});

router.post('/finalizar-aluguel', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    const { produto, especificacoes, tempo } = req.body;
    const user = req.session.user;
    res.render('finalizacao.ejs', { produto, especificacoes, tempo, user: user.nome })
});

module.exports = router
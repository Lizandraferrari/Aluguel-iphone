const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const controll = require('./controller/index'); 
const port = 6065;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    secret: '1',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', controll);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    console.log("PARA RESETAR USE CTRL+c");
});

module.exports = app;

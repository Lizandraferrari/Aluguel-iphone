const { error } = require('console')
const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    port: 3307,
    password:'usbw',
    database:'iluga'
})

conexao.connect((error) => {
    if(error){
        console.log("Erro: ",error)
        return
    }console.log("Conexao com o banco bem sucedida")
})

module.exports = conexao
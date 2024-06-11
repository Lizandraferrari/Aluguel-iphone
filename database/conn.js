const mysql = require('mysql2')
const conexao = mysql.createConnection({
    user: 'root',
    database: 'illuga',
    password: '',
    host: 'localhost'
})

conexao.connect((error) => {
    if(error){
        console.log("Houve um erro: ",error)
        return
    }
    console.log("Conexao estabelecida com o banco de dados!")
})

module.exports = conexao
const connection = require('./conn')


function addUser(dados , callback){
   //nome:nome,senha:senha,email:email,estado:estado,cidade:cidade,cep:cep,rua:rua,complemento:complemento,numero:numero 9
    let sql = 'INSERT INTO usuario SET ?'
    connection.query(sql , dados, (err, result) =>{
        if (err){
            callback(err, null)
            return
        }
        callback(null, result)
        // console.log(result , ' adicionado')
        }
    )

}

const dados = {
    login:'nome',senha:'senha',email:'email',uf:'uf',cidade:'cidade',cep:123
}

addUser(dados , (err, result)=>{
    if (err) throw err
})

module.exports = {
    addUser
}
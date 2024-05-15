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
/*
function logaUser (email , callback){
    let sql = 'SELECT email , senha FROM usuario WHERE email = ?'
    connection.query(sql , [email] , (err , results) => {
        if (err){
            callback(err , null)
        }else{
            callback(null , results)

        }
    })
}
*/

module.exports = {
    addUser,
    logaUser
}
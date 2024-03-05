function login(){
    let email = document.querySelector('').value;
    let senha = document.querySelector('').value;

    var dados = JSON.parse(localStorage.getItem('logins')) || [];
    for(let i = 0 ; dados.length > i ; i++){
        if(email == dados[i].login && senha == dados[i].senha){
            alert('Logado com sucesso!');
            break;
        }
    }
}

function cadastro(){
    let email = document.querySelector('').value;
    let senha = document.querySelector('').value;
    let senha2 = document.querySelector('').value;
    let cep = document.querySelector('').value;
    let rua = document.querySelector('').value;
    let numero = document.querySelector('').value;
    let complemento = document.querySelector('').value;
    let cpf = document.querySelector('').value;
    let nome = document.querySelector('').value;

    var dados = JSON.parse(localStorage.getItem('logins')) || [];
    let usuario = {
        id: Date.now() , login: email , senha: senha , cep: cep , rua: rua , num: numero , complemento: complemento , cpf: cpf , nome: nome
    };
    if (nome == "" ||  senha == "" || cep == "" ||email == ""|| rua == ""||senha2 == "" || numero == "" ||cpf == ""){
        alert('Preencha todos os campos obrigatórios');
    }else{
        if (senha != senha2){
            alert('As senhas inseridas estão diferentes');
        }else{
            //dados.push(usuario);
            //localStorage.setItem('logins' , JSON.stringify(dados))
        }
    }
}
function Logar(){
    
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;
    let banco = JSON.parse(localStorage.getItem("banco")); 
    
    let UsuarioEncontrado = false;
    
    if(banco){
        for (let v = 0 ; v < banco.length; v++){
                if (email === banco[v].email && senha === banco[v].senha) {
                    alert("Achou!");
                    sessionStorage.setItem("logado", true);
                    attNav();
                    UsuarioEncontrado = true;
                    break;
                }
            }
            
            if (UsuarioEncontrado) {
                window.open("index.html");

            }else{
                alert("Cadastre-se!");
                window.open("cadastro.html");
            }
        }
 }
 attNav();

function attNav(){
 document.addEventListener("DOMContentLoaded", function() {
    var logado = sessionStorage.getItem("logado");
    if (logado) {
        var divNav = document.getElementById("login");
        divNav.innerHTML = '<a class="navbar-item linkdiv" href="cadastro.html">Bem-vindo!</a>';
    }
});
}


function Cadastrar(){
    
    let nome = document.querySelector("#nome").value;
    let senha = document.querySelector("#senha1").value;
    let senha2 = document.querySelector("#senha2").value;
    let email = document.querySelector("#email").value;
    let cep = document.querySelector("#cep").value;
    let rua = document.querySelector("#rua").value;
    let numero = document.querySelector("#numero").value;
    let cidade = document.querySelector("#cidade").value;
    let estado = document.querySelector("#estado").value;
    let complemento = document.querySelector("#complemento").value;

    const banco = JSON.parse(localStorage.getItem("banco")) || []
    let provaSenha = false;

    if (senha == senha2 ) {
        provaSenha = true;
    }else{
        alert("Coloque sua senha igual a primeira!")
        return;
    }
    if (provaSenha) {
        let novoUsuario = {nome:nome,senha:senha,email:email,estado:estado,cidade:cidade,cep:cep,rua:rua,complemento:complemento,numero:numero}
        banco.push(novoUsuario);
        localStorage.setItem("banco",JSON.stringify(banco));
        alert("cadastrado!");
        window.open("login.html");
    }else{
        alert("Cadastro incompleto!");
        }
    }
    function Logar(){
    
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;
    let banco = JSON.parse(localStorage.getItem("banco")); 
    // 
    let UsuarioEncontrado = false;
    
    if(banco){
        for (let v = 0 ; v < banco.length; v++){
                if (email === banco[v].email && senha === banco[v].senha) {
                    alert("Achou!");
                    sessionStorage.setItem("logado", true);
                    attNav();
                    UsuarioEncontrado = true;
                    break;
                }
            }
            
            if (UsuarioEncontrado) {
                window.open("index.html");

            }else{
                alert("Cadastre-se!");
                window.open("cadastro.html");
            }
        }
 }
function attNav(){
    document.addEventListener("DOMContentLoaded", () => {
       var logado = sessionStorage.getItem("logado");
       if (logado) {
           var divNav = document.getElementById("login");
           divNav.innerHTML = '<a class="navbar-item linkdiv" href="cadastro.html">Bem-vindo!</a>';
       }
   })
   }
    attNav()
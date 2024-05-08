let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk;
let emailOk;
let assuntoOk;

nome.style.width = '70%'
email.style.width = '70%'

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido";
        txtNome.style.color = "red";
        nomeOk = false;
    } else {
        txtNome.innerHTML = "Nome válido";
        txtNome.style.color = "green";
        nomeOk = true;
    }
}
function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido";
        txtEmail.style.color = "red";
        emailOk = false;
    } else {
        txtEmail.innerHTML = "E-mail válido";
        txtEmail.style.color = "green";
        emailOk = true;
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 101) {
        txtAssunto.innerHTML = "Quantidade de caracteres excedidos. Digite no máximo 100 caracteres";
        txtAssunto.style.color = "red";
        txtAssunto.style.display = "block";
        assuntoOk = false;
    } else {
        txtAssunto.style.display = "none";
        assuntoOk = true;
    }
}
function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha corretamente todos os campos")
    }
}
let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let mensagem = document.querySelector('#mensagem');
let nomeOk = false;
let emailOk = false;
let mensagemOk = false;

function validaNome(){

    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3 ){
        txtNome.innerHTML = 'Nome Inválido';
        txtNome.style.color = 'red';
        nomeOk = false;
    } else {
        txtNome.innerHTML = 'Nome Válido';
        txtNome.style.color = 'green';
        nomeOk = true;
    }
}

function validaEmail(){

    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
        txtEmail.innerHTML = 'E-mail Inválido';
        txtEmail.style.color = 'red';
        emailOk = false;
    } else {
        txtEmail.innerHTML = 'E-mail Válido';
        txtEmail.style.color = 'green';
        emailOk = true;
    }
}


function validaMensagem(){

    let txtMensagem = document.querySelector('#txtMensagem')

    if(mensagem.value.length >= 100 || mensagem.value.length == 0 ){
        txtMensagem.innerHTML = 'Texto inválido, digite algo de no máximo 100 caracteres ';
        txtMensagem.style.color = 'red';
        txtMensagem.style.display = 'block';
        mensagemOk = false;
    } 
    else {
        /*--txtMensagem.style.display = 'none';*/
        txtMensagem.innerHTML = 'OK';
        txtMensagem.style.color = 'green';
        mensagemOk = true;
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && mensagemOk == true){
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}
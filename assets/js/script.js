/*
Case Senssitive = reconhece letras maiusculas e minusculas

por Tag: getElementsByTagName()
por Id: getElementsById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/
let nomeCompleto = document.querySelector('#nomeCompleto')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let nomeCompletoOk = false
let emailOk = false
let assuntoOk = false

nomeCompleto.style.width = '100%'  
email.style.width = '100%'

function validaNomeCompleto(){
    let txtNomeCompleto = document.querySelector('#txtNomeCompleto')
    if(nomeCompleto.value.length < 3){
        txtNomeCompleto.innerHTML = 'Nome inválido'
        txtNomeCompleto.style.color = 'red'
    }else{
        txtNomeCompleto.innerHTML = 'Nome válido'
        txtNomeCompleto.style.color = 'green'
        nomeCompletoOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length > 100){
        txtAssunto.innerHTML = 'O texto digitado é muito grande, digite no máximo 100 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if(nomeCompletoOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '500px'
    mapa.style.height = '350px'
}
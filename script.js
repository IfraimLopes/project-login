function checar() {
    var emailInput = window.document.getElementById('ilogin').value;
    var senhaInput = window.document.getElementById('isenha').value;
    
    if (emailInput === '' || senhaInput === '') {
        alert('Por favor, preencha todos os campos.');
    } else if (emailInput === 'ifraimlopes213@gmail.com' && senhaInput === '1234') {
        alert('Login feito com sucesso.');
    } else {
        alert('Erro no Login, Verifique o Email e a Senha.');
    }
}




/*
function checar(){
    if (email && senha == 0){

var email = window.document.getElementById('ilogin')
var senha = window.document.getElementById('isenha')
var entrar = window.document.getElementById('botao')

var email = 'ifraimlopes213@gmail.com'
var senha = '1234'



    alert('Login feito')
 } else{
    alert('Erro no Login, Verifique o Email e a Senha')
 }
}
 */
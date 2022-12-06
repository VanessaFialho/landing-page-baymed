let divPreCadastro = document.querySelector('div#form')
let fespecial, fnome, femail, ftel, fnomeIndicado, ftelIndicado = ''

function perguntaEspecialidade() {
    divPreCadastro.innerHTML = ''
    divPreCadastro.innerHTML = "<form id='formCadastro' method='post'><legend><h2>Qual especialidade você gostaria de agendar?</h2></legend><p><input class='txt' type='text' id='txtEspecialidade' name='txtEspecialidade' placeholder='Ex: Clínico geral, cardiologista, etc...'></p><p><input class='formbtn' type='button' value='Próximo' onclick='perguntaDados()'></p></form>"
}

function perguntaDados() {
    fespecial = document.querySelector('input#txtEspecialidade').value

    if(fespecial == '') {
        window.alert('Por favor, digite uma especialidade.')
    } else {
        divPreCadastro.innerHTML = ''
        divPreCadastro.innerHTML = "<form id='formCadastro' method='post'><p><label>Qual o seu nome? </label> <input class='txt' type='text' id='txtNome' name='txtNome' placeholder='Nome' required></p><p><label>Qual o seu email? </label> <input class='txt' type='email' id='txtEmail' name='txtEmail' placeholder='Email' required></p><p><label>Qual o seu telefone? </label> <input class='txt' type='tel' id='txtTel' name='txtTel' placeholder='(DDD)9 xxxx-xxxx' required></p><p><input class='formbtn' type='button' value='Próximo' onclick='perguntaIndicacao()'></p></form>"
    }
}

function perguntaIndicacao() {
    fnome = document.querySelector('input#txtNome').value
    femail = document.querySelector('input#txtEmail').value
    ftel = document.querySelector('input#txtTel').value

    if(fnome == '' || ftel == '') {
        window.alert('Por favor, preencha seu nome e telefone.')
    } else {
        divPreCadastro.innerHTML = ''
        divPreCadastro.innerHTML = "<form id='formCadastro' method='post'><h2>Quem você gostaria de indicar para ter acesso a essa oportunidade junto com você?</h2><p><label>Nome: </label> <input class='txt' type='text' id='txtNomeIndicado' name='txtNomeIndicado' placeholder='Nome do seu amigo' required></p><p><label>Telefone: </label> <input class='txt' type='tel' id='txtTelIndicado' name='txtTelIndicado' placeholder='(DDD)9 xxxx-xxxx' required></p><p><input class='formbtn' type='button' value='Finalizar' onclick='mostraAgradecimento()'></p></form>"
    }
}

function mostraAgradecimento() {
    fnomeIndicado = document.querySelector('input#txtNomeIndicado').value
    ftelIndicado = document.querySelector('input#txtTelIndicado').value

    divPreCadastro.innerHTML = ''
    divPreCadastro.innerHTML = "<h2>Obrigado por fazer o seu pré-cadastro!</h2><p id='msg'>A plataforma será lançada em breve e você será uma das primeiras pessoas a ser avisado(a)!</p>"
}

function descerNavbar() {
    let navBar = document.getElementById('navegacao')
    let navLinks = document.getElementsByName('links')

    if(scrollY != 0) {
        navBar.style.background = '#ffffff'
        navBar.classList.replace('navbar-dark', 'navbar-light')

        navLinks.forEach(link => {
            link.style.color = '#24b5bf'
        })
    } else {
        navBar.style.background = 'transparent'
        navBar.classList.replace('navbar-light', 'navbar-dark')

        navLinks.forEach(link => {
            link.setAttribute('style',"color='#ffffff'")
        })
    }
}

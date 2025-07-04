var formEl = document.querySelector('form');

// Chama a função captura_eventos
captura_eventos(formEl, 'submit', formValid);

// Função para capturar eventos
function captura_eventos(objeto, evento, funcao) {
    if (objeto.addEventListener) {
        objeto.addEventListener(evento, funcao, true);
    } else if (objeto.attachEvent) {
        var evt = 'on' + evento;
        objeto.attachEvent(evt, funcao);
    }
}

// Função para cancelar eventos
function cancela_evento(evento) {
    if (evento.preventDefault) {
        evento.preventDefault();
    } else {
        window.event.returnValue = false;
    }
    return false;
}

// Função principal de validação
function formValid(evento) {
    // Pega os campos do formulário
    var nome = document.getElementById('nome').value.trim();
    var cnpj = document.getElementById('cnpj').value.trim();
    var fundacao = document.getElementById('fundacao').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefone = document.getElementById('telefone').value.trim();
    var cep = document.getElementById('cep').value.trim();
    var uf = document.getElementById('uf').value.trim();
    var cidade = document.getElementById('cidade').value.trim();

    // Valida Nome
    if (nome === '') {
        alert('O campo Nome da empresa é obrigatório!');
        return cancela_evento(evento);
    }

    // Valida CNPJ/CPF
    if (cnpj === '') {
        alert('O campo CNPJ/CPF é obrigatório!');
        return cancela_evento(evento);
    }

    // Valida Data de Fundação
    if (fundacao === '') {
        alert('O campo Data de Fundação é obrigatório!');
        return cancela_evento(evento);
    }

    // Valida Email
    if (email === '') {
        alert('O campo Email é obrigatório!');
        return cancela_evento(evento);
    }

    // Valida Telefone
    if (telefone === '') {
        alert('O campo Telefone é obrigatório!');
        return cancela_evento(evento);
    }

    // Valida CEP
    if (cep === '') {
        alert('O campo CEP é obrigatório!');
        return cancela_evento(evento);
    }

    // Valida UF
    if (uf === '') {
        alert('O campo UF é obrigatório!');
        return cancela_evento(evento);
    }

    // Valida Cidade
    if (cidade === '') {
        alert('O campo Cidade é obrigatório!');
        return cancela_evento(evento);
    }

    alert("O formulário será enviado!");
    return true;
}
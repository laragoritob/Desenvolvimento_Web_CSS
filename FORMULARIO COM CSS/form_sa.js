var formEl = document.getElementById('meuForm');

// CHAMA A FUNÇÃO CAPTURA_EVENTOS //
captura_eventos(formEl, 'submit', formValid);

// FUNÇÃO PARA CAPTURAR EVENTOS //
function captura_eventos(objeto, evento, funcao) {
    // Teste addEventListener //
    if (objeto.addEventListener) {
        objeto.addEventListener(evento, funcao, true);
    } 
    // Teste attachEevent //
    else if (objeto.attachEvent) {
        var evento = 'on' + evento;
        objeto.attachEvent(evento, funcao);
    } 
}

// FUNÇÃO PARA CANCELAR EVENTOS //
function cancela_eventos(evento) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        window.event.returnValue = false;
    }
    return false;
}

function formValid(evento) {
    // Variável que verifica os campos //
    var campoCod = formEl.cod_func.value;
    var campoNome = formEl.nome.value;
    var campoCPF = formEl.cpf.value;
    var campoSexo = formEl.sexo;
    var campoEscolaridade = formEl.escolaridade;
    var campoTelefone = formEl.telefone.value;
    var campoRG = formEl.rg.value;
    var campoEst_Civil = formEl.est_civil;
    var campoCEP = formEl.cep.value;
    var campoUF = formEl.uf.value;
    var campoCidade = formEl.cidade.value;
    var campoBairro = formEl.bairro.value;
    var campoRua = formEl.rua.value;
    var campoNum_Residencia = formEl.num_residencia.value;
    var campoFuncionario = formEl.funcionario.value;
    var campoSenha = formEl.senha.value;
    var campoCargo = formEl.cargo.value;
    var campoEmail = formEl.email.value;
    var campoFoto = formEl.foto.value;

    // VERIFICA CAMPO DE TEXTO //
    if (campoNome.length == '') {
        alert('O campo nome é obrigatório.');
        return false;
    }

    // LAÇO QUE PERCORRE TODAS AS OPÇÕES //
    for (var i = 0; i < campoCidade.length; i++) {
        // VERIFICA SE A OPÇÃO ESTÁ SELECIONADA //
        if (campoCidade[i].selected) {
            if (campoCidade[i].value == '') {
                alert('Selecione uma cidade.');
                cancela_eventos(evento);
            }
        }
    }

    // CHAMA A FUNÇÃO VERIFICA CAMPOS PARA O RADIO //
    verificaCampos(campoRadios);

    // CHAMA A FUNÇÃO VERIFICA CAMPOS PARA O CHECKBOX //
    verificaCampos(campoCheckboxes);
    alert("O formulário será enviado.")
    return true;
}
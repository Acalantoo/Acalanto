/* Função do Header */

function go_index() {
    window.location.href = "Index.html";
}

function go_login() {
    window.location.href = "Login.html";
}

function go_cadastro() {
    window.location.href = "Cadastro.html";
}

/* Término da função do Header */

/* Função do Simulador Financeiro */

function simular_prejuizo() {
    if (input_frasco_recebido.value == "" || input_frasco_perdido.value == "") {
        alert("Por favor preencha os campos apenas com números");
        input_frasco_recebido.value = "";
        input_frasco_perdido.value = "";
    }
    else if (Number(input_frasco_recebido.value) < Number(input_frasco_perdido.value)) {
        alert("Quantidade de frascos perdidos não podem ser maiores que frascos recebidos")
        input_frasco_recebido.value = "";
        input_frasco_perdido.value = "";
    }
    else {
        var frasco_recebido = Number(input_frasco_recebido.value);
        var frasco_perdido = Number(input_frasco_perdido.value);
        var frasco_media = Number(select_frasco_media.value);

        var frasco_restante = frasco_recebido - frasco_perdido;
        var porc_frasco_restante = (frasco_restante * 100) / frasco_recebido;
        var porc_frasco_perdido = (frasco_perdido * 100) / frasco_recebido;
        var prejuizo = frasco_media * frasco_perdido;

        p_simulador.innerHTML = ` 
        O número de doações de leites maternos recebidos foram de <b style="color:white"><u>${frasco_recebido}</u> frascos</b>, destas doações apenas <b style="color:white"><u>${porc_frasco_restante.toFixed(2)}</u>%</b> foram conservados adequadamente, os outros <b style="color:white"><u>${porc_frasco_perdido.toFixed(2)}</u>%</b> foram descartados. 
        Para suprir a necessidade destes <b style="color:white"> <u>${porc_frasco_perdido.toFixed(2)}</u>%</b>, é utilizado o suplemento alimentar, tendo uma média de valor de <b style="color:white"><u>R$${frasco_media.toLocaleString("pt-BR", { currency: 'BRL' })}</u></b>. Ou seja, por mês o valor gasto é de <b style="color:white"><u>R$${prejuizo.toLocaleString("pt-BR", { currency: 'BRL' })}</u></b>. 
        Nós da Acalanto vamos te ajudar a reduzir estes <b style="color:white"><u>${porc_frasco_perdido.toFixed(2)}</u>%</b> monitorando o leite materno de forma adequada. Sendo assim, os <b style="color:white"><u>${porc_frasco_perdido.toFixed(2)}</u>%</b> que você teve de perda e os gastos com os suplementos poderão diminuir em até 50% (que já serão notados em 3 meses após a implementação). 
        `
    }
}

/* Término da função do Simulador Financeiro */

/* Funções da página de cadastro */

function solicitar_cadastro() {
    var nomeEmpresa = input_cadastro_empresa.value
    var CNPJ = input_cadastro_cnpj.value;
    var logradouro = input_cadastro_logradouro.value;
    var bairro = input_cadastro_bairro.value;
    var cep = input_cadastro_cep.value;
    var cidade = input_cadastro_cidade.value;
    var complemento = input_cadastro_complemento.value;
    var telefone = input_cadastro_telefone.value;

    var nomeUsuario = input_usuario_nome.value;
    var email = input_usuario_email.value;
    var senha = input_usuario_senha.value;
    var confirmarSenha = input_usuario_confirmar_senha.value;

    if (nomeEmpresa == "" || CNPJ == "" || logradouro == "" || bairro == "" || cep == "" || cidade == "" ||
        complemento == "" || telefone == "" || nomeUsuario == "" || email == "" || 
        senha == "" || confirmarSenha == "") {
        alert("Preencha todos os campos para prosseguir!");
    }
    else if(nomeEmpresa.length > 90){
        alert('Limite de 90 caracteres excedido!')
    }
    else if(CNPJ.length > 18 || CNPJ.length < 14){
        alert('CNPJ inválido!')
    }
    else if(logradouro.length > 90){
        alert('Limite de 90 caracteres excedido!')
    }
    else if(bairro.length > 90){
        alert('Limite de 90 caracteres excedido!')
    }
    else if(cep.length > 9 || cep.length < 8){
        alert('CEP inválido!')
    }
    else if(cidade.length > 90){
        alert('Limite de 90 caracteres excedido!')
    }
    else if(complemento.length > 90){
        alert('Limite de 90 caracteres excedido!')
    }
    else if(telefone.length > 14 || telefone.length < 8){
        alert('Número de telefone inválido!')
    }
    else if(nomeUsuario.length > 90){
        alert('Limite de 90 caracteres excedido!')
    }
    else if(email.indexOf('@') <= 0 || email.indexOf('.com') == -1){
        alert('Email inválido!')
    }
    else if(confirmarSenha != senha){
        alert('As senhas não estão iguais!')
    }
    else{
        div_botoes.innerHTML = `
        <button class = "btn_Solicitar" onclick = "enviar_solicitacao()" 
        type = "submit"> Confirmar solicitação </button>`;
    }
}

function enviar_solicitacao(){
    window.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
          form.reset();
        }
      }
}

/* Término das funções da página cadastro */

/* Funções da página contato */
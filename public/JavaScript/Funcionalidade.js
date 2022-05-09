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
        O número de doações de leites maternos recebidos foram de <b><u>${frasco_recebido}</u></b> frascos, destas doações apenas <b><u>${porc_frasco_restante.toFixed(2)}</u>%</b> foram conservados adequadamente, os outros <b><u>${porc_frasco_perdido.toFixed(2)}</u>%</b> foram descartados. 
        Para suprir a necessidade destes <b> <u>${porc_frasco_perdido.toFixed(2)}</u>%</b>, é utilizado o suplemento alimentar, tendo uma média de valor de <b><u>R$${frasco_media.toLocaleString("pt-BR", { currency: 'BRL' })}</u></b>. Ou seja, por mês o valor gasto é de <b><u>R$${prejuizo.toLocaleString("pt-BR", { currency: 'BRL' })}</u></b>. 
        Nós da Acalanto vamos te ajudar a reduzir estes <b><u>${porc_frasco_perdido.toFixed(2)}</u>%</b> monitorando o leite materno de forma adequada. Sendo assim, os <b><u>${porc_frasco_perdido.toFixed(2)}</u>%</b> que você teve de perda e os gastos com os suplementos poderão diminuir em até 50% (que já serão notados em 3 meses após a implementação). 
        `
    }
}

/* Término da função do Simulador Financeiro */

/* Funções da página de cadastro */

function enviar_solicitacao(){
    window.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
          form.reset();
        }
      }
}

/* Término das funções da página cadastro */

/* Funções de sessão */

function validarSessao() {

    var idUsuario = sessionStorage.ID_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var empresa = sessionStorage.FK_EMPRESA;

    if (email != null && nome != null && idUsuario != null && empresa != null) {
        perfil.innerHTML = `Olá, ${nome}`
    } else {
        window.location = "../Login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../Login.html";
}

/* Término das funções de sessão */
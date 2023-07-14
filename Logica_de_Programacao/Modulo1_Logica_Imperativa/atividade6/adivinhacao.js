// Função para fazer perguntas ao usuário e obter as respostas
function fazerPergunta(pergunta) {
    var resposta = prompt(pergunta);
    resposta = resposta.toLowerCase(); // Converter a resposta para minúsculas

    // Verificar se a resposta é válida (Sim ou Não)
    if (resposta === "sim" || resposta === "não") {
        return resposta;
    } else {
        alert("Por favor, responda apenas com 'Sim' ou 'Não'.");
        return fazerPergunta(pergunta); // Fazer a pergunta novamente
    }
}

// Fazer as perguntas ao usuário
alert("******************** Jogo da adivinhação ********************")

var terrestre = fazerPergunta("O meio de transporte é terrestre? (Sim/Não)");

if (terrestre === "sim") {
    var umaPessoa = fazerPergunta("Cabe apenas 1 pessoa? (Sim/Não)");

    if (umaPessoa === "sim") {
        var pesado = fazerPergunta("É pesado? (Sim/Não)");

        if (pesado === "sim") {
            alert("O meio de transporte escolhido foi o trator.");
        } else {
            var temPedal = fazerPergunta("Tem pedal? (Sim/Não)");

            if (temPedal === "sim") {
                alert("O meio de transporte escolhido foi a bicicleta.");
            } else {
                alert("Este tipo de veículo não consta nas opções.");
            }
        }
    } else {
        var usaCapacete = fazerPergunta("Usa capacete? (Sim/Não)");

        if (usaCapacete === "sim") {
            alert("O meio de transporte escolhido foi a moto.");
        } else {
            alert("Este tipo de veículo não consta nas opções.");
        }
    }
} else {
    alert("Este meio de transporte não consta nas opções.");
}

// Importa a biblioteca redline-sync
const readline = require('readline-sync');

// Cria o objeto Candidatos
const Candidatos = {
    CANDIDATO_X: "candidato_x",
    CANDIDATO_Y: "candidato_y",
    CANDIDATO_Z: "candidato_z",
    BRANCO: "branco",
};

// Cria o objeto votos, que está relacionado ao objeto Candidato
const votos = {
    [Candidatos.CANDIDATO_X]: 0,
    [Candidatos.CANDIDATO_Y]: 0,
    [Candidatos.CANDIDATO_Z]: 0,
    [Candidatos.BRANCO]: 0,
};

// Função para obter votos
function obterVoto() {
    while (true) {
        console.log(`========== ELEIÇÕES ==========
889 - ${Candidatos.CANDIDATO_X}
847 - ${Candidatos.CANDIDATO_Y}
515 - ${Candidatos.CANDIDATO_Z}
0 - ${Candidatos.BRANCO}      
`);

        let voto;
        try {
            voto = readline.questionInt("Digite a opcao correspondente ao seu candidato: ");
        } catch (error) {
            console.error("Erro: não é permitido digitar elemento textual. Digite novamente o valor numérico da opcao de voto");
            continue;
        }

        switch (voto) {
            case 889:
                votos[Candidatos.CANDIDATO_X]++;
                break;
            case 847:
                votos[Candidatos.CANDIDATO_Y]++;
                break;
            case 515:
                votos[Candidatos.CANDIDATO_Z]++;
                break;
            case 0:
                votos[Candidatos.BRANCO]++;
                break;
            default:
                console.log("Voto anulado! Será computado como voto em branco");
                votos[Candidatos.BRANCO]++;
                break;
        }

        // Condição para confirmar o voto do eleitor
        const confirmacao = readline.question("\nVoce confirma o seu voto? (Digite 's' para sim ou qualquer outra coisa para nao) ");
        if (confirmacao.toLowerCase() !== "s") {
            console.log("\nVoto cancelado.");
        }

        const resposta = readline.question("\nDeseja continuar a votacao? (Digite 's' para sim ou qualquer outra coisa para nao) ");
        if (resposta.toLowerCase() !== "s") {
            break;
        }
    }

    finalizarVotacao();

}

// Função para finalizar a votação 
function finalizarVotacao() {
    console.log("\nVotacao encerrada!");
    console.log("Resultado da votacao:");
    for (const candidato in votos) {
        console.log(`${candidato}: ${votos[candidato]} votos`);
    }

    const totalBrancosNulos = votos[Candidatos.BRANCO];
    console.log(`Total de votos brancos e nulos: ${totalBrancosNulos}`);
}


// Chama a função obterVoto e inicia a votação
obterVoto();
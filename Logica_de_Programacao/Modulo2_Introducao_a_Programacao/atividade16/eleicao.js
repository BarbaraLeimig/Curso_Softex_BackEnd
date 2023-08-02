// Importar biblioteca readline-sync
const readline = require('readline-sync');
//import { questionInt, question } from 'readline-sync'; Ex: let variavel = questionInt("Digite o numero");

// Variáveis que armazenam o número de votos dos candidatos
let x = 0, y = 0, z = 0, branco = 0, nulo = 0;

// Cria o objeto Candidatos
const Candidatos = {
    candidato_X: 889,
    candidato_Y: 847,
    candidato_Z: 515,
    branco: 0,
};

// Função que exibe o menu da Eleição
function menu() {
    console.log(`========== ELEICAO ==========
    Candidato X = ${Candidatos.candidato_X}
    Candidato Y = ${Candidatos.candidato_Y}
    Candidato Z = ${Candidatos.candidato_Z}
    Voto em branco = ${Candidatos.branco}
                `);
}

// Função que obtem o voto do usuário
function votacao() {
    menu();
    let voto = readline.questionInt("\nDigite o numero do seu candidato: ");

    if (isNaN(voto)) {
        console.error("Nao é permitido texto! Digite um valor numérico.");
    } else {
        switch (voto) {
            case Candidatos.candidato_X:
                x++;
                break;
            case Candidatos.candidato_Y:
                y++;
                break;
            case Candidatos.candidato_Z:
                z++;
                break;
            case Candidatos.branco:
                branco++;
                break;
            default:
                console.log("\nOpção inválida! Seu voto será contabilizado como nulo");
                nulo++;
                break;
        }
    }
}

// Função que avalia se há vencedor e retorna quem é o candidato vencedor da eleição
function vencedor() {
    // Math.max é uma função que retorna o maior valor entre dois ou mais números
    const maxVotos = Math.max(x, y, z, branco + nulo);

    if (maxVotos === x && maxVotos > y && maxVotos > z && maxVotos > branco + nulo) {
        return `\nRESULTADO: O VENCEDOR É O Candidato X COM ${maxVotos} VOTOS!`;
    } else if (maxVotos === y && maxVotos > x && maxVotos > z && maxVotos > branco + nulo) {
        return `\nRESULTADO: O VENCEDOR É O Candidato Y COM ${maxVotos} VOTOS!`;
    } else if (maxVotos === z && maxVotos > x && maxVotos > y && maxVotos > branco + nulo) {
        return `\nRESULTADO: O VENCEDOR É O Candidato Z COM ${maxVotos} VOTOS!`;
    } else if (maxVotos === branco + nulo && maxVotos > x && maxVotos > y && maxVotos > z) {
        return `\nRESULTADO: NAO HOUVE VENCEDOR`;
    } else {
        return `\nRESULTADO: HOUVE EMPATE! Os vencedores têm ${maxVotos} votos cada.`;
    }
}


// Função principal que inicia a eleição e exibe seu resultado final
function Eleicao() {
    while (true) {
        votacao();
        let confirmarVoto = readline.question("\nVoce confirma o seu voto? (Digite 's' para sim ou qualquer outra coisa para nao) ");
        if (confirmarVoto.toLowerCase() == "s") {

            while (true) {
                let parar = readline.question("\nEncerrar a votacao? (Digite 's' para sim ou qualquer outra coisa para nao) ");
                if (parar.toLowerCase() === "s") {
                    console.log(`\n
========== APURACAO DOS VOTOS ==========
Candidato X = ${x} 
Candidato Y = ${y}
Candidato Z = ${z}
Votos brancos e nulos = ${branco + nulo}
`);
                    return console.log(vencedor());
                }
                break;
            }
        } else {
            console.log("\nVOTO CANCELADO! Por favor, vote novamente.\n");
        }
    }
}

// Chama a função principal
Eleicao();

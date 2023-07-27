// Importar a biblioteca readline-sync.
const readline = require('readline-sync');

// Função para gerar cartas automaticamente de 1 a 11.
// Math.random sorteia um número decimal entre 0 e 1; Math.floor arredonda esse número para um valor inteiro.
function cardGenerator() {
    return Math.floor(Math.random() * 11);
}

// Laço de repetição para verificar se o jogador deseja continuar a jogar ao terminar uma rodada
let continueToPlay = true

do {
    // Gerar cartas aleatórias do jogador
    let playersCard1 = cardGenerator();
    let playersCard2 = cardGenerator();
    console.log(`Cartas do Jogador: ${playersCard1}, ${playersCard2}`);

    // Calcular a soma das cartas do jogador
    let sumPlayersCards = playersCard1 + playersCard2;

    // Verificar se o jogador perdeu (soma das cartas > 21)
    if (sumPlayersCards > 21) {
        console.log(`Você perdeu! Soma das cartas: ${sumPlayersCards}.`);
    } else {
        // Gerar as 4 cartas do Banco (adversário)
        let banksCards1 = cardGenerator();
        let banksCards2 = cardGenerator();
        let banksCards3 = cardGenerator();
        let banksCards4 = cardGenerator();
        console.log(`Cartas do Banco: ${banksCards1}, ${banksCards2}, ${banksCards3}, ${banksCards4}.`);

        // Calcular a soma das cartas do banco
        let sumBanksCards = banksCards1 + banksCards2 + banksCards3 + banksCards4;

        // Verificar quem ganhou a rodada
        if (sumBanksCards > 21 || sumPlayersCards <= 21 && sumPlayersCards > sumBanksCards) {
            console.log(`
            Você ganhou! 
            Soma das cartas do jogador: ${sumPlayersCards}. 
            Soma das cartas do banco: ${sumBanksCards}
            `)
        } else {
            console.log(`
            Você perdeu
            Soma das cartas do jogador: ${sumPlayersCards}
            Soma das cartas do banco: ${sumBanksCards}
            `)
        }
    }

    let answer = readline.question("Voce deseja jogar novamente? (Digite 'sim' para continuar ou qualquer outra coisa para sair) ");

    if (answer !== "sim") {
        return continueToPlay = false;
    }

} while (continueToPlay)

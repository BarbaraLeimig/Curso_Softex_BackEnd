// Função para gerar um número aleatório entre 1 e 11 (representando as cartas)
function gerarCarta() {
    return Math.floor(Math.random() * 11) + 1;
}

// Gerar as duas cartas iniciais do jogador
let carta1 = gerarCarta();
let carta2 = gerarCarta();

// Calcular a soma das duas cartas do jogador
let somaCartasJogador = carta1 + carta2;

// Verificar se o jogador perdeu (soma maior que 21)
if (somaCartasJogador > 21) {
    console.log("Você perdeu! Soma das suas cartas: " + somaCartasJogador);
} else {
    // Gerar as quatro cartas iniciais do banco
    let cartaBanco1 = gerarCarta();
    let cartaBanco2 = gerarCarta();
    let cartaBanco3 = gerarCarta();
    let cartaBanco4 = gerarCarta();

    // Calcular a soma das cartas do banco
    let somaCartasBanco = cartaBanco1 + cartaBanco2 + cartaBanco3 + cartaBanco4;

    // Verificar quem venceu
    if (somaCartasBanco > 21 || somaCartasJogador <= 21 && somaCartasJogador > somaCartasBanco) {
        console.log("Você venceu! Soma das suas cartas: " + somaCartasJogador + ", soma das cartas do banco: " + somaCartasBanco);
    } else {
        console.log("O banco venceu! Soma das suas cartas: " + somaCartasJogador + ", soma das cartas do banco: " + somaCartasBanco);
    }
}

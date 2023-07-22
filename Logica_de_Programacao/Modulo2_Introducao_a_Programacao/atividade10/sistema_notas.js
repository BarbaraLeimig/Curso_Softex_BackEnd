// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Função para avaliar se a nota digitada pelo usuário é válida (se é um número)
function lerNota(mensagem) {
    while (true) {
        let nota = parseFloat(readline.question(mensagem));
        if (!isNaN(nota)) {
            return nota;
        } else {
            console.log("Valor inválido. Por favor, digite novamente.")
        }
    }
}

// Solicitação do nome do aluno
let nome = readline.question("Digite o nome do aluno: ");

// Solicitação da primeira e segunda nota do aluno
let nota1 = lerNota("Digite a pimeira nota: ");
let nota2 = lerNota("Digite a segunda nota: ");

// Solicitando o número de faltas
let faltas = parseInt(readline.question("Digite o numero de faltas do aluno: "));

// Cálculo da média 
let media = (nota1 + nota2) / 2;
console.log(`\nMédia: ${media}`);

// Condições para aprovação e reprovação do aluno
if (media < 7 || faltas > 3) {
    console.log(`${nome} está reprovado(a)`);
} else {
    console.log(`${nome} está aprovado(a)`);
}
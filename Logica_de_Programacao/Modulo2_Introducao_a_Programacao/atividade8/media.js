// Importando a biblioteca readline-sync para interagir com o usuário no console
const readline = require('readline-sync');

// Declarandoa as variáves nota1 e nota2 + input das perguntas ao usuário
const nota1 = parseFloat(readline.question("Digite a nota da primeira avaliacao: "));
const nota2 = parseFloat(readline.question("Digite a nota da segunda avaliacao: "));
// Cálculo da média
const media = (nota1 + nota2) / 2;
//console.log("Media: ", media);

// Condição para aprovaçõa ou reprovação do aluno
if (media >= 7) {
    console.log("Media: " + media + ". Parabéns, você foi aprovado!");
} else {
    console.log("Media: " + media + ". Você foi reprovado.");
}

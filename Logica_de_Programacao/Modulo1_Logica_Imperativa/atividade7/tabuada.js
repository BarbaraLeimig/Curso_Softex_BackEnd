// Importa a biblioteca readline-sync para poder interagir com o usuário no console
const readline = require('readline-sync');

// Solicita ao usuário um número inteiro
// A função parseInt() é usada para converter um valor em uma representação de número inteiro. 
var numero = parseInt(readline.question("Digite um numero inteiro positivo:"));

// Imprime a tabuada do número
console.log("Tabuada do " + numero + ":");
for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
}
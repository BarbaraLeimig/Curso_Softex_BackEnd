// Importa a biblioteca readline-sync para interagir com o usuário no terminal
import { question } from 'readline-sync';

// Solicita ao usuário um número inteiro
var numero = parseInt(question("Digite um número inteiro:"));

// Imprime a tabuada do número
console.log("Tabuada do " + numero + ":");

for (var i = 1; i <= 10; i++) {
  var resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
}
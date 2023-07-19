// Importa a biblioteca readline-sync para poder interagir com o usuário no console
const readline = require('readline-sync');

// Função para verificar se o valor é um número inteiro
function isInt(valor) {
    // A função isNaN() retorna true se o valor não for um número válido (NaN), e false caso contrário.
    return !isNaN(valor);
}

/* Solicita ao usuário um número inteiro válido e realiza o tratamento de erro caso necessário
A função parseInt() é usada para converter um valor em uma representação de número inteiro */
function solicitarNumeroInt() {
    while (true) {
        var numero = readline.question("Digite um numero inteiro positivo: ");
        if (isInt(numero)) {
            return parseInt(numero);
        } else {
            console.log("O valor digitado não é um número inteiro. Por favor, tente novamente.");
        }
    }
}

/* Chamando a função no código para solicitar ao usuário um número inteiro 
Coloquei numero como uma constante pois nesta etapa ele não será mais alterado. Declarado no escopo global */
const numero = solicitarNumeroInt();

// Imprime a tabuada do número
console.log("Tabuada do " + numero + ":");
for (var i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
}

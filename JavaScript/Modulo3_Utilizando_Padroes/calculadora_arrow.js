// Função tradicional sem parâmetros
function exibeMenu() {
    console.log("Escolha uma operação:");
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
}

// Função tradicional com parâmetros e retorno de valor
function calcularOperacao(operacao, num1, num2) {
    switch (operacao) {
        case 1:
            return num1 + num2;
        case 2:
            return num1 - num2;
        case 3:
            return num1 * num2;
        case 4:
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Divisão por zero não permitida!";
            }
        default:
            return "Opção inválida";
    }
}

// Arrow function com parâmetros e retorno de valor
const exibeResultado = (resultado) => {
    console.log("O resultado é: " + resultado);
}

// Utilizando as funções de forma lógica
exibeMenu();

const operacaoEscolhida = 3; // Escolha a operação desejada (1 a 4)
const numero1 = 10;
const numero2 = 5;

const resultadoCalculo = calcularOperacao(operacaoEscolhida, numero1, numero2);
exibeResultado(resultadoCalculo);

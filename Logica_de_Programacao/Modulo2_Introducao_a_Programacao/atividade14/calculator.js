// Importar biblioteca readline-sync
const readline = require('readline-sync');

// Função para realizar as operações matemáticas
function operations(n1, n2, operator) {
    switch (operator) {
        case 1:
            return n1 + n2;
        case 2:
            return n1 - n2;
        case 3:
            return n1 * n2;
        case 4:
            if (n2 === 0) {
                return "Erro! Não é possível dividir por 0!";
            } else {
                return n1 / n2;
            }
        default:
            return "Opção inválida!";
    }
}


// Função para solicitar dados
function calculator() {

    let newOperation = true;

    while (newOperation) {

        console.log("\n******************** CALCULADORA ********************");

        let operator = readline.questionInt(`
    1 - soma
    2 - subtracao
    3 - multiplicacao
    4 - divisao
    5 - sair
    Digite o numero da operacao que deseja realizar: `);

        // Verifica se o usuário escolheu a opção 5 ou digitou algo que não seja um número
        if (isNaN(operator) || operator === 5) {
            console.log("\nPrograma encerrado\n");
            break;
        }

        // Solicitar os números ao usuário
        let n1 = readline.questionInt("\nDigite o primeiro numero: ");
        let n2 = readline.questionInt("Digite o segundo numero: ");

        // Chamar a função operations, que realiza o cálculo de acordo com a operação escolhida
        let result = operations(n1, n2, operator);
        console.log(`\nResultado: ${result}`);
    }
}

// Chamando a função da calculadora no escopo global
calculator();

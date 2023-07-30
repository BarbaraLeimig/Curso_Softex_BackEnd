
const readline = require('readline-sync');

// Função para calcular a idade do usuário com base em seu ano de nascimento
function calculadoraIdade(nomeCompleto, anoNascimento) {
    const anoAtual = 2022;
    const idade = anoAtual - anoNascimento;
    return `Olá, ${nomeCompleto}! Em 2022 você completou ou completará ${idade} anos.`;
}

// Função para obter os dados do usuário
function data() {
    let nomeCompleto, anoNascimento;

    // Laço de repetição para aplicar as condições solicitadas na atividade. Ler aquivo README.md
    while (true) {
        try {
            // Solicita o nome completo e ano de nascimento ao usuário usando o readline-sync
            nomeCompleto = readline.question("Digite seu nome completo: ");
            anoNascimento = readline.questionInt("Digite o ano em que voce nasceu (valido entre 1922 e 2021: ");

            // Verifica se o que foi digitado é um número inteiro e se está dentro do intervalo válido
            if (!Number.isInteger(anoNascimento) || anoNascimento < 1922 || anoNascimento > 2021) {
                // Caso o ano de nascimento seja inválido, lança um erro
                throw new Error("Ano de nascimento inválido. Por favor, digite um valor numérico entre 1922 e 2021.");
            } else {
                // Se os valores inseridos forem válidos, sair do loop while
                break;
            }

        } catch (error) {
            // Captura o erro, exibe a mensagem de erro e continua o loop para solicitar novamente os dados corretos
            console.error(error.message);
        }
    }

    // Calcula a idade com base no ano de nascimento fornecido e exibe o resultado
    const resultado = calculadoraIdade(nomeCompleto, anoNascimento);
    console.log(resultado);

}

// Inicia a interação com o usuário para obter os dados
data();

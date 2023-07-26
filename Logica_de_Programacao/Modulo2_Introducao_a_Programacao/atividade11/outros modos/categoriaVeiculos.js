// Importar a biblioteca readline-sync
const readlineSync = require('readline-sync');

// Função para verificar a categoria de habilitação
function verificarCategoriaHabilitacao(quantidadeRodas, pesoBruto, quantidadePessoas) {
    if (quantidadeRodas === 2 || quantidadeRodas === 3) {
        return 'Categoria A';
    } else if (
        quantidadeRodas === 4 &&
        pesoBruto <= 3500 &&
        quantidadePessoas <= 8
    ) {
        return 'Categoria B';
    } else if (
        (quantidadeRodas === 4 || quantidadeRodas > 4) &&
        pesoBruto > 3500 &&
        pesoBruto <= 6000
    ) {
        return 'Categoria C';
    } else if (
        (quantidadeRodas === 4 || quantidadeRodas > 4) &&
        quantidadePessoas > 8
    ) {
        return 'Categoria D';
    } else if ((quantidadeRodas === 4 || quantidadeRodas > 4) && pesoBruto > 6000) {
        return 'Categoria E';
    } else {
        return 'Categoria não definida';
    }
}

// Solicitar informações sobre o veículo ao usuário
function obterInformacoesVeiculo() {
    const quantidadeRodas = readlineSync.questionInt('Quantidade de rodas: ');
    const pesoBruto = readlineSync.questionInt('Peso bruto (em kg): ');
    const quantidadePessoas = readlineSync.questionInt('Quantidade de pessoas: ');

    return {
        quantidadeRodas,
        pesoBruto,
        quantidadePessoas,
    };
}

// Função principal
function main() {
    console.log('===== Verificador de Categoria de Habilitação =====');
    const { quantidadeRodas, pesoBruto, quantidadePessoas } = obterInformacoesVeiculo();

    const categoriaHabilitacao = verificarCategoriaHabilitacao(
        quantidadeRodas,
        pesoBruto,
        quantidadePessoas
    );

    console.log('Categoria de habilitação necessária:', categoriaHabilitacao);
}

// Executar a função principal
main();

const readlineSync = require('readline-sync');

function verificarCategoriaHabilitacao(rodas, peso, pessoas) {
    if (rodas <= 3) {
        return 'Categoria A';
    } else if (rodas === 4 && peso <= 3500 && pessoas <= 8) {
        return 'Categoria B';
    } else if (rodas >= 4 && peso > 3500 && peso <= 6000) {
        return 'Categoria C';
    } else if (rodas >= 4 && pessoas > 8) {
        return 'Categoria D';
    } else if (rodas >= 4 && peso > 6000) {
        return 'Categoria E';
    } else {
        return 'Categoria não definida';
    }
}

function main() {
    console.log('===== Verificador de Categoria de Habilitação =====');
    const rodas = readlineSync.questionInt('Quantidade de rodas: ');
    const peso = readlineSync.questionInt('Peso bruto (em kg): ');
    const pessoas = readlineSync.questionInt('Quantidade de pessoas: ');

    const categoriaHabilitacao = verificarCategoriaHabilitacao(rodas, peso, pessoas);

    console.log('Categoria de habilitação necessária:', categoriaHabilitacao);
}

main();

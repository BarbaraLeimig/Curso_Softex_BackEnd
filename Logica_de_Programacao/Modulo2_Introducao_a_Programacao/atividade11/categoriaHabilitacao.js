// Importar a biblioteca readline-sync
const readlineSync = require('readline-sync');

// Obter informações sobre o veículo
const rodas = readlineSync.questionInt('Quantidade de rodas: ');
const peso = readlineSync.questionInt('Peso bruto (em kg): ');
const pessoas = readlineSync.questionInt('Quantidade de pessoas: ');

// Condições para categorização da habilitação
let categoriaHabilitacao;

if (rodas === 2 || rodas === 3) {
    categoriaHabilitacao = 'Categoria A';

} else if (rodas === 4 && peso <= 3500 && pessoas <= 8) {
    categoriaHabilitacao = 'Categoria B';

} else if ((rodas === 4 || rodas > 4) && peso > 3500 && peso <= 6000) {
    categoriaHabilitacao = 'Categoria C';

} else if ((rodas === 4 || rodas > 4) && pessoas > 8) {
    categoriaHabilitacao = 'Categoria D';

} else if ((rodas === 4 || rodas > 4) && peso > 6000) {
    categoriaHabilitacao = 'Categoria E';

} else {
    categoriaHabilitacao = 'Categoria não definida';
}

console.log('Categoria de habilitação necessária:', categoriaHabilitacao);

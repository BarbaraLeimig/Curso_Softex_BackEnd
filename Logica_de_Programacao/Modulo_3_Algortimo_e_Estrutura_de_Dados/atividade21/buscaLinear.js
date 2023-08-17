// Tendo em vista que é um array desordenado e de tamanhho curto, farei a busca linear
function buscaLinear(array, elementoBuscado) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elementoBuscado) {
            return i;
        }
    }
    return -1;
}

const lista = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const elemento = 20;

const indiceEncontrado = buscaLinear(lista, elemento);

if (indiceEncontrado !== -1) {
    console.log(`O elemento ${elemento} foi encontrado no índice ${indiceEncontrado} da lista.`);
} else {
    console.log(`O elemento ${elemento} não foi encontrado na lista.`);
}

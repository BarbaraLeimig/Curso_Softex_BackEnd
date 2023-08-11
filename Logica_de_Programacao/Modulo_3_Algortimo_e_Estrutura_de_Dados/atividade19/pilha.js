// Declara a constante array
const array = [3, 7, 9, 1, 0];

// Função para desempilhar os elementos do array
function desempilhar() {
    while (array.length > 0) {
        console.log(array);
        array.pop();
    }
}

// Chama a função que desempilhará cada elemento até o array se encontrar vazio
desempilhar();
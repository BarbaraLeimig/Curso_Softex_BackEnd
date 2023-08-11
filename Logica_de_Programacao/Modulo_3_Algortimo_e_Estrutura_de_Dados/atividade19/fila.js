// Declara a constante array
const array = [3, 7, 9, 1, 0];

//Remove o primeiro elemento da fila e retorna o array até que o mesmo esteja vazio
function desenfileirar() {
    while (array.length > 0) {
        console.log(array);
        array.shift();
    }
    console.log("---------------------------------")
}

//Chama a função desenfileirar
desenfileirar();
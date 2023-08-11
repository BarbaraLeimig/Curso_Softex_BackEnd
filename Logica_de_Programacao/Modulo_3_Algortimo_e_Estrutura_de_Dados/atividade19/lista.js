// Declara a constante array
const array = [3, 7, 9, 1, 0];

// Remove os elementos do array. Como é uma lista, não existe uma orde pré-estabelecida
function remover() {
    while (array.length > 0) {
        let indice = array.indexOf();
        console.log(array);
        array.splice(indice, 1);
    }
}

// Chama a função queremove elementos do array
remover();
// Cria uma matriz bidimensional com informações sobre animais
const animais = [
    ["Leão", "Felino", 10],
    ["Gato", "Felino", 10],
    ["Tigre", "Felino", 8],
    ["Falcão", "Ave", 15],
    ["Águia", "Ave", 5]
];

// Exibe informações sobre os animais
function exibirAnimais() {
    console.log("Nome\t\tEspécie\t\tIdade");
    console.log("-------------------------------------");
    for (let i = 0; i < animais.length; i++) {
        const [nome, especie, idade] = animais[i];
        console.log(`${nome}\t\t${especie}\t\t${idade}`);
    }
}

exibirAnimais();

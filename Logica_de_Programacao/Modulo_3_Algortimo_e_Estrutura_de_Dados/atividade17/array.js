// Cria listas com nomes de pessoas, idades e cores favoritas
const nomes = ["Barbara", "Carlos", "Pedro", "Mariana", "João", "Lucas", "Isabela", "Sophia", "Rafael", "Gabriela"];
const idades = [25, 30, 22, 28, 27, 35, 19, 24, 29, 33];
const coresFavoritas = ["Vinho", "Verde", "Roxo", "Amarelo", "Vermelho", "Laranja", "Rosa", "Branco", "Preto", "Marrom"];

// Imprimindo os arrays originais
console.log(`
**************************************** LISTAS ORIGINAIS ***************************************
Nomes: ${nomes}
Idades: ${idades}
Cores favoritas: ${coresFavoritas}
\n`);

// Alterando itens do array
idades.splice(0, 1, 28); // Altera o array no índice 0, removendo 1 elemento e passando outro valor no seu lugar
coresFavoritas.splice(2, 2, "Lilás", "Bege"); // Altera o array a partir do índice 2, removendo 2 elementos e passando 2 valores novos nos locais

// Imprimindo os arrays após alterações
console.log(`
**************************************** LISTAS ALTERADAS ***************************************
Nomes: ${nomes}
Idades: ${idades}
Cores favoritas: ${coresFavoritas}
\n`);

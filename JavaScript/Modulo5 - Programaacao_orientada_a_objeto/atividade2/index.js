const readline = require("readline-sync");

// Função para realizar a operação de divisão
function realizarDivisao(numero1, numero2) {
  if (numero2 === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }

  return numero1 / numero2;
}

// Solicita ao usuário fornecer dois números
const numero1 = parseFloat(readline.question("Digite o primeiro número: "));
const numero2 = parseFloat(readline.question("Digite o segundo número: "));

try {
  // Tenta realizar a operação de divisão
  const resultado = realizarDivisao(numero1, numero2);
  console.log(`Resultado da divisão: ${resultado}`);
} catch (error) {
  // Captura e trata a exceção
  console.error(`Erro: ${error.message}`);
} finally {
  // Executa o bloco finally, independentemente de ter ocorrido uma exceção ou não
  console.log("Programa concluído.");
}

//Importando a biblioteca readline-sync
const readline = require("readline-sync");

//Ciando a classe Calculadora
class Calculadora {
  constructor() {
    this.n1 = 0;
    this.n2 = 0;
    this.resultado = 0;
  }

  //Criando o método para coletar os dados
  coletarDados() {
    this.n1 = readline.questionFloat("Digite o primeiro numero: ");
    this.n2 = readline.questionFloat("Digite o segundo número: ");
  }

  //Criando o método para escolha e calculo da operação
  operacao() {
    let escolha = 0;
    do {
      console.log("\nEscolha a operacao que deja realizar:");
      console.log("1. Soma");
      console.log("2. Subtracao");
      console.log("3. Multiplicacao");
      console.log("4. Divisao");
      console.log("5. Sair");

      escolha = readline.questionInt(
        "\nDigite o número correspondente à operação desejada: "
      );
    } while (escolha !== 5);
  }
}

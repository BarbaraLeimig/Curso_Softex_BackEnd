const readline = require("readline-sync");

class Calculadora {
  constructor() {
    this.n1 = 0;
    this.n2 = 0;
    this.resultado = 0;
    this.resto = 0;
  }

  coletarValores() {
    this.n1 = readline.questionFloat("Digite o primeiro valor numérico:");
    this.n2 = readline.questionFloat("Digite o segundo valor numérico:");
  }

  escolherOperacao() {
    console.log("Escolha uma operação:");
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
    console.log("5. Sair");

    const escolha = readline.questionInt(
      "Digite o número da operação desejada:"
    );

    switch (escolha) {
      case 1:
        this.resultado = this.n1 + this.n2;
        break;
      case 2:
        this.resultado = this.n1 - this.n2;
        break;
      case 3:
        this.resultado = this.n1 * this.n2;
        break;
      case 4:
        if (this.n2 !== 0) {
          this.resultado = this.n1 / this.n2;
          this.resto = this.n1 % this.n2; // Calcula o resto da divisão
        } else {
          console.log("Erro: Divisão por zero.");
        }
        break;
      case 5:
        console.log("Encerrando o programa.");
        return false; // Sair do loop
      default:
        console.log("Operação inválida.");
    }

    console.log(`Resultado: ${this.resultado}`);
    if (escolha === 4) {
      console.log(`Resto da Divisão: ${this.resto}`);
    }
  }
}

const calculadora = new Calculadora();
calculadora.coletarValores();
calculadora.escolherOperacao();

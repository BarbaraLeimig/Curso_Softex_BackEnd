const readline = require("readline-sync");

// Definindo a classe "CalculadoraMedia"
class CalculadoraMedia {
  constructor() {
    this.nota1 = 0;
    this.nota2 = 0;
    this.nota3 = 0;
    this.media = 0;
  }

  // Método para coletar as notas do usuário
  coletarNotas() {
    this.nota1 = readline.questionFloat("Digite a primeira nota: ");
    this.nota2 = readline.questionFloat("Digite a seunda nota: ");
    this.nota3 = readline.questionFloat("Digite a terceira nota: ");
  }

  // Método para calcular a médid
  calcularMedia() {
    this.media = (this.nota1 + this.nota2 + this.nota3) / 3;
  }

  // Método para exibir a média
  exibirMedia() {
    console.log(`A sua média é: ${this.media.toFixed(2)}`);
  }
}

// Criando uma instância da classe "CalculadoraMedia"
const calculadora = new CalculadoraMedia();

// Coletando as notas
calculadora.coletarNotas();

//Calculando a media
calculadora.calcularMedia();

//Exibir a média no console
calculadora.exibirMedia();

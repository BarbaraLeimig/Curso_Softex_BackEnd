// Define o objeto Banco
const Banco = {
  conta: "0012435",
  saldo: 15.555,
  tipoConta: "Corrente",
  agencia: "001",

  // Método para buscar saldo
  buscarSaldo: function () {
    return this.saldo;
  },

  //Método para realizar depósito
  deposito: function (valor) {
    if (valor > 0) {
      this.saldo += valor;
      return `Depósito de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo}`;
    } else {
      return "Valor invalido para depósito.";
    }
  },

  // Método para realizar saque
  saque: function (valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      return `Saque de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo}`;
    } else {
      return "Saldo isuficinte ou valor inválido para saque.";
    }
  },

  // Método para obter o número da conta
  numeroDaConta: function () {
    return this.conta;
  },
};

console.log(Banco.buscarSaldo()); //Exibe o saldo atual
console.log(Banco.deposito(500)); //Depósito de R$500.00
console.log(Banco.saque(220)); //Saque de R$220.00
console.log(Banco.numeroDaConta()); //Exibe o número da conta

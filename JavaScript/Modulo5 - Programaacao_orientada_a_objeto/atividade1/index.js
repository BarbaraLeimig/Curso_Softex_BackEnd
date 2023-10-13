// Definindo a classe Carro
class Carro {
  constructor(modelo, cor) {
    this.modelo = modelo;
    this.cor = cor;
    this.velocidadeAtual = 0;
    this.ligado = false;
  }

  ligar() {
    this.ligado = true;
    console.log('O carro está ligado.');
  }

  acelerar(velocidade) {
    if (this.ligado) {
      this.velocidadeAtual += velocidade;
      console.log(`Acelerando para ${this.velocidadeAtual} km/h.`);
    } else {
      console.log('O carro precisa estar ligado para acelerar.');
    }
  }

  frear() {
    this.velocidadeAtual = 0;
    console.log('Carro freou. Velocidade atual: 0 km/h.');
  }
}

// Criando uma instância de Carro
const meuCarro = new Carro('Toyota', 'Preto');
meuCarro.ligar();
meuCarro.acelerar(50);
meuCarro.frear();

// Definindo a classe Mesa
class Mesa {
  constructor(material, cor, numGavetas) {
    this.material = material;
    this.cor = cor;
    this.numGavetas = numGavetas;
    this.gavetasAbertas = [];
  }

  abrirGaveta(numeroGaveta) {
    this.gavetasAbertas.push(numeroGaveta);
    console.log(`Gaveta ${numeroGaveta} aberta.`);
  }

  fecharGaveta(numeroGaveta) {
    const index = this.gavetasAbertas.indexOf(numeroGaveta);
    if (index !== -1) {
      this.gavetasAbertas.splice(index, 1);
      console.log(`Gaveta ${numeroGaveta} fechada.`);
    } else {
      console.log(`Gaveta ${numeroGaveta} não está aberta.`);
    }
  }

  limpar() {
    console.log('Mesa limpa.');
  }
}

// Criando uma instância de Mesa
const minhaMesa = new Mesa('Madeira', 'Marrom', 3);
minhaMesa.abrirGaveta(1);
minhaMesa.limpar();

// Exemplos de objetos abstratos não podem ser demonstrados de forma tão direta como objetos materiais
// No entanto, você pode criar instâncias e chamar os métodos correspondentes conforme necessário.

// Exemplo da Conta Bancária
const minhaConta = {
  numeroConta: '123456',
  saldo: 1000,
  titular: 'João',

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$ ${valor} realizado. Saldo atual: R$ ${this.saldo}`);
  },

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor} realizado. Saldo atual: R$ ${this.saldo}`);
    } else {
      console.log('Saldo insuficiente para saque.');
    }
  },

  consultarSaldo() {
    console.log(`Saldo atual: R$ ${this.saldo}`);
  },
};

minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.consultarSaldo();

// Exemplo do Calendário
class Calendario {
  constructor(ano, mes) {
    this.ano = ano;
    this.mes = mes;
    this.eventos = [];
  }

  adicionarEvento(evento) {
    this.eventos.push(evento);
    console.log(`Evento "${evento}" adicionado ao calendário.`);
  }

  removerEvento(evento) {
    const index = this.eventos.indexOf(evento);
    if (index !== -1) {
      this.eventos.splice(index, 1);
      console.log(`Evento "${evento}" removido do calendário.`);
    } else {
      console.log(`Evento "${evento}" não encontrado no calendário.`);
    }
  }

  visualizarEventos() {
    console.log(`Eventos para ${this.mes}/${this.ano}: ${this.eventos.join(', ')}`);
  }
}

// Criando uma instância de Calendario
const meuCalendario = new Calendario(2023, 10);
meuCalendario.adicionarEvento('Reunião de Equipe');
meuCalendario.adicionarEvento('Aniversário');
meuCalendario.visualizarEventos();

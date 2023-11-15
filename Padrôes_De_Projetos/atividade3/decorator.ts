// Interface para o componente base (Sanduíche)
interface Sanduiche {
  custo(): number;
  descricao(): string;
}

// Implementação do componente base (Sanduíche de frango assado)
class FrangoAssado implements Sanduiche {
  custo(): number {
    return 4.5;
  }

  descricao(): string {
    return "Sanduíche de Frango Assado";
  }
}

// Decorator abstrato
abstract class IngredienteAdicional implements Sanduiche {
  protected sanduiche: Sanduiche;

  constructor(sanduiche: Sanduiche) {
    this.sanduiche = sanduiche;
  }

  custo(): number {
    return this.sanduiche.custo();
  }

  descricao(): string {
    return this.sanduiche.descricao();
  }
}

// Decorator concreto (Pepperoni)
class Pepperoni extends IngredienteAdicional {
  custo(): number {
    return this.sanduiche.custo() + 0.99;
  }

  descricao(): string {
    return `${this.sanduiche.descricao()}, Pepperoni`;
  }
}

// Decorator concreto (Queijo Mussarela Ralado)
class QueijoMussarelaRalado extends IngredienteAdicional {
  custo(): number {
    return this.sanduiche.custo() + 2.0;
  }

  descricao(): string {
    return `${this.sanduiche.descricao()}, Queijo Mussarela Ralado`;
  }
}

// Cliente
const sanduicheBase: Sanduiche = new FrangoAssado();

// Adicionando ingredientes extras usando Decorators
const sanduicheDecorado: Sanduiche = new QueijoMussarelaRalado(
  new Pepperoni(sanduicheBase)
);

// Imprimir no console
console.log(
  `${sanduicheDecorado.descricao()} custa $${sanduicheDecorado
    .custo()
    .toFixed(2)}`
);

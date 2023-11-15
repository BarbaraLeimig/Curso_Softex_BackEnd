// Interface alvo (Galinha)
interface Galinha {
  cacarejar(): void;
  voar(): void;
}

// Classe Adaptee (Pato)
class Pato {
  grasnar(): void {
    console.log('Quack! Quack!');
  }

  voar(): void {
    console.log('Voando...');
  }
}

// Adaptador (AdaptadorPato)
class AdaptadorPato implements Galinha {
  private pato: Pato;

  constructor(pato: Pato) {
    this.pato = pato;
  }

  cacarejar(): void {
    this.pato.grasnar();
  }

  voar(): void {
    this.pato.voar();
  }
}

// Cliente (AdaptadorPatoDemo)
class AdaptadorPatoDemo {
  static executar(): void {
    const pato = new Pato();
    const adaptadorPato = new AdaptadorPato(pato);

    console.log('Pato:');
    pato.grasnar();
    pato.voar();

    console.log('\nAdaptador Pato (usado como Galinha):');
    adaptadorPato.cacarejar();
    adaptadorPato.voar();
  }
}

// Executar a demonstração
AdaptadorPatoDemo.executar();

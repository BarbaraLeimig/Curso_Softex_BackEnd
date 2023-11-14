Crie uma fábrica de veículos utilizando o padrão Prototype. Os requisitos devem ser:

- implemente uma classe abstrata Veículo com um construtor padrão e os métodos clone e represent;
- o construtor da classe Veículo deve receber o modelo, marca, cor e numeroRodas como parâmetros;
- crie pelo menos duas subclasses da classe Veículo, que acrescentem um ou mais atributos, por exemplo: carro que tem dois campos a mais, como numeroRodas e numeroPortas
- desenovlva uma classe Aplicação que deve criar um array com seis veículos com dois tipos de veículos diferentes (subclasses), utilizando o método clone dos objetos para preencher o array;
- na classe Aplicação, implemente um método que retorne um array com o mesmo tamanho do array de veículos, onde cada elemento deve ser um clone dos elementos do array veículos
- no final, deve imprimir na tela o retorno da função represent de cada elemento desse novo array de clones de veículos

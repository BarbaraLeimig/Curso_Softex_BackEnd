class Pessoa {
    constructor(nome, idade, filho = null) {
        this.nome = nome;
        this.idade = idade;
        this.filho = filho;
        this.proximo = null; // Ponteiro para o próximo nó
    }
}

class ListaEncadeada {
    constructor() {
        this.head = null; // O início da lista é nulo, indicando uma lista vazia
    }

    adicionarPessoa(nome, idade, filho = null) {
        const novaPessoa = new Pessoa(nome, idade, filho);

        if (this.head === null) {
            // Se a lista estiver vazia, o novo elemento se torna o início da lista
            this.head = novaPessoa;
        } else {
            let atual = this.head;
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            // Encontra o último elemento da lista e conecta o novo elemento a ele
            atual.proximo = novaPessoa;
        }
    }

    exibirPessoas() {
        let atual = this.head;
        while (atual !== null) {
            console.log(`Nome: ${atual.nome}, Idade: ${atual.idade}`);
            if (atual.filho !== null) {
                console.log(`  Filho: ${atual.filho.nome}`);
            }
            atual = atual.proximo; // Avança para o próximo nó
        }
    }
}

// Criar a lista encadeada e adicionar pessoas
const lista = new ListaEncadeada();
lista.adicionarPessoa("Alice", 30);
lista.adicionarPessoa("Bob", 25);
lista.adicionarPessoa("Carol", 40);

// Conectar filho à pessoa
const alice = lista.head;
const filhoDeAlice = new Pessoa("David", 5);
alice.filho = filhoDeAlice;

// Exibir informações de todas as pessoas na lista
lista.exibirPessoas();

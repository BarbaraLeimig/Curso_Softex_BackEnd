// Criando a classe Pessoa, que é referente a um nó
class Pessoa {
    constructor(nome, idade, filho = null) {
        this.nome = nome;
        this.idade = idade;
        this.filho = filho;
        this.proximo = null;
    }
}

// Criando a classe Lista Encadeada
class listaEncadeada {
    constructor() {
        this.head = null; // O início da lista é nulo, indicando uma lista vazia
    }

    // Criando o método para adicionar pessoas na lista
    adicionarPessoa(nome, idade, filho = null) {
        const novaPessoa = new Pessoa(nome, idade, filho);

        // Se a lista estiver vazia, o novo elemento se torna o início da lista
        if (this.head === null) {
            this.head = novaPessoa;
        } else {
            let pessoaAtual = this.head;
            while (pessoaAtual.proximo !== null) {
                pessoaAtual = pessoaAtual.proximo;
            }

            // Encontra o último elemento da lista e conecta o novo elemento a ele
            pessoaAtual.proximo = novaPessoa;
        }
    }

    // Criando o método para exibir as informações da lista encadeada
    exibirPessoas() {
        let pessoaAtual = this.head;
        while (pessoaAtual !== null) {
            console.log(`Nome: ${pessoaAtual.nome}, Idade: ${pessoaAtual.idade}`);
            if (pessoaAtual.filho !== null) {
                console.log(`Filho: ${pessoaAtual.filho.nome}`);
            }
            pessoaAtual = pessoaAtual.proximo; // Avança para o próximo nó
        }
    }
}

// Criando a lista encadeada e adicionando pessoas
const lista = new listaEncadeada();
lista.adicionarPessoa("Alice", 30);
lista.adicionarPessoa("Bob", 25);
lista.adicionarPessoa("Carol", 40);

// Conectando filho à pessoa
const alice = lista.head;
const filhoDeAlice = new Pessoa("David");
alice.filho = filhoDeAlice;

// Exibidindo as informações de todas as pessoas da lista
lista.exibirPessoas();

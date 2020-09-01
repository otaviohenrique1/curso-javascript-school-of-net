class Pilha {
    constructor() {
        this.elementos = [];
    }

    emplihar(dados) {
        // Unshift vai adicionar elementos no topo da pilha
        this.elementos.unshift(dados);
    }

    desempilhar() {
        // Remove do topo
        return this.elementos.shift();
    }

    imprimir() {
        if (this.estaVazia()) {
            console.log("Pilha vazia");
        }
        else {
            console.log(this.elementos.toString());
        }
    }

    topo() {
        if (!this.estaVazia()) {
            return this.elementos[0];
        }
    }

    estaVazia() {
        return this.elementos.length == 0;
    }

    tamanho() {
        return this.elementos.length;
    }

    limpar() {
        this.elementos = [];
    }
}

var pilhaDeClientes = new Pilha();
// pilhaDeClientes.emplihar("Victor");
// pilhaDeClientes.emplihar("Lima");
// pilhaDeClientes.emplihar("Erik");
// pilhaDeClientes.emplihar("Leonan");
// pilhaDeClientes.emplihar("Luiz");
// console.log(pilhaDeClientes.desempilhar());
// pilhaDeClientes.imprimir();
// console.log(pilhaDeClientes.desempilhar());
// console.log(pilhaDeClientes.topo());
pilhaDeClientes.emplihar(10);
pilhaDeClientes.emplihar(20);
pilhaDeClientes.emplihar(30);
pilhaDeClientes.emplihar(70);
pilhaDeClientes.limpar();
pilhaDeClientes.imprimir();

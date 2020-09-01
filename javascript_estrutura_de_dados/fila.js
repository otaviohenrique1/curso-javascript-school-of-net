class Fila {
    // LILO
    // O último a entrar é o último a sair
    // Inserir no final do array
    // Remover no ínicio
    constructor() {
        this.elementos = [];
    }

    inserir(dado) {
        // Insiro no final
        this.elementos.push(dado);
    }
    
    remover() {
        // Removo no ínicio
        return this.elementos.shift();
    }
    
    imprimir() {
        console.log(this.elementos.toString());
    }
    
    primeiro() {
        return this.elementos[0];
    }

    ultimo() {
        // A quantidade de elementos em um array - 1
        //      0   1  2
        // Ex: [10,20,40]
        //3-1 = 2
        return this.elementos[this.elementos.length-1];
    }

    estaVazia() {
        return this.elementos.length == 0;
    }

    limpar() {
        this.elementos = [];
    }
}

var filaDeClientes = new Fila();
filaDeClientes.inserir("Victor");
filaDeClientes.inserir("Erik");
filaDeClientes.inserir("Leonan");
filaDeClientes.inserir("Luiz");
filaDeClientes.inserir("Jackson");
filaDeClientes.inserir("Wesley");
filaDeClientes.imprimir();
// Atender o primeiro cliente
console.log(filaDeClientes.remover());
filaDeClientes.remover();
// Após eu atender o cliente
filaDeClientes.imprimir();
// Primeiro da fila
console.log(filaDeClientes.primeiro());
// último da fila
console.log(filaDeClientes.ultimo());
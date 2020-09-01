class Pilha {
    private elementos: Array<any> = [];
    
    constructor() {}
    
    public emplilhar(dado: any) {
        this.elementos.unshift(dado);
    }
    
    public desemplilhar() {
        return this.elementos.shift();
    }

    public imprimir() {
        return this.elementos.toString();
    }

    public topo() {
        if (this.listaVazia()) {
            return "Lista vazia";
        }
        return this.elementos[0];
    }

    public listaVazia() {
        return this.elementos.length == 0;
    }

    public tamanho() {
        return this.elementos.length;
    }

    public limpar() {
        this.elementos = [];
    }
}

let lista = new Pilha();
console.log(lista.imprimir());
lista.emplilhar(10)
lista.emplilhar(20)
lista.emplilhar(30)
lista.emplilhar(40)
lista.emplilhar(50)
lista.emplilhar(60)
lista.emplilhar(70)
lista.emplilhar(80)
lista.emplilhar(90)
console.log(lista.imprimir());
console.log(lista.desemplilhar());
console.log(lista.imprimir());
console.log(lista.desemplilhar());
console.log(lista.imprimir());
console.log(lista.topo());
console.log(lista.tamanho());
console.log(lista.limpar());
console.log(lista.imprimir());
console.log(lista.listaVazia());
console.log(lista.imprimir());
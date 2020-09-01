class FilaComPrioridade {
    private elementos: Array<any> = [];

    // LILO
    // O último a entrar é o último a sair
    // Inserir no final do array
    // Remover no ínicio
    constructor() {
        this.elementos = [];
    }
    
    public inserir(dado: any, prioridade: number) {
        var elementoDaFila = {
            dado: '',
            prioridade: 0
        };

        elementoDaFila.dado = dado;
        elementoDaFila.prioridade = prioridade;
        if (this.estaVazia()) {
            this.elementos.push(elementoDaFila)
        } else {
            var adicionado = false;
            for (let i = 0; i < this.elementos.length; i++) {
                if (elementoDaFila.prioridade > this.elementos[i].prioridade) {
                    this.elementos.splice(i, 0, elementoDaFila);
                    adicionado = true;
                    break;
                }
                if (!adicionado) {
                    this.elementos.push(elementoDaFila);
                }
            }
        }
    }
    
    public remover() {
        // Removo no ínicio
        return this.elementos.shift();
    }
    
    public imprimir() {
        for (let i = 0; i < this.elementos.length; i++) {
            console.log(i, "Dado: " +  this.elementos[i].dado, "Prioridade: " + this.elementos[i].prioridade);
        }
    }
    
    public primeiro() {
        return this.elementos[0];
    }

    public ultimo() {
        // A quantidade de elementos em um array - 1
        //      0   1  2
        // Ex: [10,20,40]
        //3-1 = 2
        return this.elementos[this.elementos.length-1];
    }

    public estaVazia() {
        return this.elementos.length == 0;
    }

    public limpar() {
        this.elementos = [];
    }
}

var filaDeHospital = new FilaComPrioridade();
filaDeHospital.inserir("Paciente 101",3);
filaDeHospital.inserir("Paciente 97",5);
filaDeHospital.inserir("Paciente 1400",4);
filaDeHospital.inserir("Paciente 10",6);

console.log(filaDeHospital.remover());

filaDeHospital.imprimir();
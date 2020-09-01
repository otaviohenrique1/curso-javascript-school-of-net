class App {
    public fat(num: number) : number {
        if (num === 0) {
            return 1;
        }
        return num * this.fat(num - 1);
    }
}

let testeApp = new App();
let numero = 3;
let resultado = testeApp.fat(numero);
console.log(`Resultado do fatorial de ${numero} é ${resultado}`);

function f() {
    return 'f';
}

class Pessoa {
    constructor(nome, altura, sexo) {
        this.nome = nome;
        this._altura = altura;
        this.sexo = sexo;
    }

    getAltura() {
        return this._altura;
    }

    get altura() {
        return this._altura;
    }

    set altura(altura) {
        this._altura = altura;
    }
}

const pessoa = new Pessoa('luiz carlos', '1.88', 'm');
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.getAltura());
console.log(pessoa.altura);
console.log(pessoa.altura = '0');
console.log(pessoa.altura);
class Athlete {
    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    getResultIMC(weight, height) {
        return weight / (height * height);
    }

    static formatImcResult(imc) {
        return imc.toFixed(2);
    }
}

const leonan = new Athlete();
leonan.name = 'Leonan';
leonan.weight = 75;
leonan.height = 1.74;

console.log(leonan);
console.log(leonan.name, leonan.weight, leonan.height)
console.log(`${leonan.name} has ${Athlete.formatImcResult(leonan.getResultIMC(leonan.weight, leonan.height))} IMC`);

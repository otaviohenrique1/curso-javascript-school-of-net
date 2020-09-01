function testVar() {
    var a = 0;
    if (1 < 2) {
        var a = 1;
    }
    console.log(a);
}
testVar();

function testLet() {
    let a = 0;
    if (1 < 2) {
        let a = 1;
    }
    console.log(a);
}
testLet();

function testConst() {
    const a = 0;
    // a = 1;
    if (1 < 2) {
        const a = 1;
    }
    console.log(a);
}
testConst();

const obj = {
    y: 1,
    z: 2
};

// var -> Tem escopo global
// let -> Tem escopo definido
// const -> Valor nao muda
// Ordem de prioridade na declaração de variaveis -> const>let>var
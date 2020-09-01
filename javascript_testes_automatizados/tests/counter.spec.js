const assert = require('assert');
const counter = require('../src/counter');

describe('Testando contador', function() {
    // before(function() {
    //     // Executado antes de todos os testes
    //     console.log("before");
    // });
    // after(function() {
    //     // Executado depois de todos os testes
    //     console.log("after");
    // });
    beforeEach(function() {
        // Executado antes de cada teste
        counter.count = 0;
        // console.log("beforeEach");
    });
    // afterEach(function() {
    //     // Executado depois de cada teste
    //     console.log("afterEach");
    // });
    it('contador deve iniciar com valor zero', function() {
        const counterResult = counter.count;
        assert.equal(counterResult, 0);
    });
    it('teste de incremento de 1', function() {
        // counter.count = 0;
        counter.increment();
        const counterResult = counter.count;
        assert.equal(counterResult, 1);
    });
    it('teste de decremento de 1', function() {
        // counter.count = 0;
        counter.decrement();
        const counterResult = counter.count;
        assert.equal(counterResult, -1);
    });
    it('teste de incremento de 10', function() {
        // counter.count = 0;
        counter.increment(10);
        const counterResult = counter.count;
        assert.equal(counterResult, 10);
    });
});
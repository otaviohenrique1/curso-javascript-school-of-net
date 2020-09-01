const assert = require('assert');
const colorConverter = require('./../src/color-converter');

describe('Testando conversor de cores', function() {
    describe('Conversão de rgb para hex', function() {
        it('Converte vermelho', function() {
            const colorRgb = [255, 0, 0];
            const colorHex = colorConverter.toHex(colorRgb);
            assert.equal(colorHex, '#ff0000');
        });
        it('Converte verde', function() {
            const colorRgb = [0, 255, 0];
            const colorHex = colorConverter.toHex(colorRgb);
            assert.equal(colorHex, '#00ff00');
        });
        it('Converte vermelho', function() {
            const colorRgb = [0, 0, 255];
            const colorHex = colorConverter.toHex(colorRgb);
            assert.equal(colorHex, '#0000ff');
        });
    });
    describe('Conversão de hex para rgb', function() {
        it('Conversão com #', function() {
            const colorRgb = colorConverter.toRgb('#ff0000');
            assert.deepEqual(colorRgb, [255, 0, 0]);
        });
        it('Conversão sem #', function() {
            const colorRgb = colorConverter.toRgb('ff0000');
            assert.deepEqual(colorRgb, [255, 0, 0]);
        });
    });
});
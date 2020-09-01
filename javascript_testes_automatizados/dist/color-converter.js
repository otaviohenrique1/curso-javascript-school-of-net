(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod);
        global.colorConverter = mod.exports;
    }
})(this, function (module) {
    'use strict';

    var addZeroToLeft = function addZeroToLeft(value) {
        if (value.length == 1) {
            value = 0 + value;
        }
        return value;
    };

    module.exports = {
        toHex: function toHex(rgb) {
            var red = addZeroToLeft(rgb[0].toString(16));
            var green = addZeroToLeft(rgb[1].toString(16));
            var blue = addZeroToLeft(rgb[2].toString(16));
            return '#' + red + green + blue;
        },
        toRgb: function toRgb(hex) {
            if (hex.substring(0, 1) == '#') {
                hex = hex.substring(1, hex.length);
            }
            var red = parseInt(hex.substring(0, 2), 16);
            var green = parseInt(hex.substring(2, 4), 16);
            var blue = parseInt(hex.substring(4, 6), 16);

            return [red, green, blue];
        }
    };
});

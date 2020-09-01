const addZeroToLeft = function(value) {
    if (value.length == 1) {
        value = 0 + value;
    }
    return value;
}

module.exports = {
    toHex(rgb) {
        const red = addZeroToLeft(rgb[0].toString(16));
        const green = addZeroToLeft(rgb[1].toString(16));
        const blue = addZeroToLeft(rgb[2].toString(16));
        return '#' + red + green + blue;
    },
    toRgb(hex) {
        if (hex.substring(0, 1) == '#') {
            hex = hex.substring(1, hex.length)
        }
        const red = parseInt(hex.substring(0, 2), 16);
        const green = parseInt(hex.substring(2, 4), 16);
        const blue = parseInt(hex.substring(4, 6), 16);

        return [red, green, blue];
    }
};
let path = require('path');

module.exports = {
    entry: './amd/run.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    }
}

const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: 'jquery'
    },
    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
const path = require('path');
// import path from 'path';

module.exports = {
    mode: 'production',
    entry: { main: './src/index.js' },
    output: {
        filename: '[name] bundle.js',
        path: path.resolve(__dirname, 'build')
    }
}

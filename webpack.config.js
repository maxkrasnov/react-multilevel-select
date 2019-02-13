const path = require('path');

module.exports = {
    entry: './example/index.js',
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'stage-0', 'react'], plugins: ['transform-class-properties', 'transform-object-rest-spread'] }
                }],
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'example/build/'),
        filename: 'react-multilevel-select.js'
    }
}

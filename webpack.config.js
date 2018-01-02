const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, './client/public/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './client/public/js/compiled')
    },
    resolve: { extensions: ['.js', '.json', '.jsx'] },
    // plugins: [     new webpack.DefinePlugin({         'process.env': {
    //  NODE_ENV: JSON.stringify('production')         }     }),     new
    // webpack.optimize.UglifyJsPlugin() ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'env', 'react', 'stage-0'
                    ]
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
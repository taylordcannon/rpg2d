const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/client/main.js', //main client entry point to run the game
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' //bundled up js file that contains all js info
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            },
        ]
    }
};
const path = require('path');
const {htmlPluginsForAllPages, entriesForAllPages} = require("./webpack-utils");
const isProduction = process.env.NODE_ENV === 'production';

const config = {
    entry: {
        ...entriesForAllPages
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        ...htmlPluginsForAllPages
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                commons: {
                    minSize: 100,
                    name: 'components',
                    test: /[\\/]components\/common[\\/]/,
                    chunks: 'all',
                },
                newsComponents: {
                    minSize: 100,
                    test: /[\\/]components\/news[\\/]/,
                    name: 'news-components',
                    chunks: 'all',
                }
            },
        },
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';


    } else {
        config.mode = 'development';
    }
    return config;
};

const path = require('path')
const HTMLWebpackPlagin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWwebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }


    if (isProd) {
        config.minimizer = [
            new CssMinimizerWwebpackPlugin(),
            new TerserWebpackPlugin()
        ];
    }

    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].${ext}`

const cssLoaders = extra => {
    const loaders = [{
            loader: MiniCssExtractPlugin.loader,
            options: {}
        },
        "css-loader"
    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders
}

const babelOptions = preset => {
    const options = {
        presets: [
            '@babel/preset-env'
          ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    }

    if (preset) {
        options.presets.push(preset)
    }
    return options
};

const jsLoader = () => {
    const loader = [{
        loader: "babel-loader",
        options: babelOptions()
    }];

    if (isDev) {
        loader.push('eslint-loader')
    }

    return loader;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['core-js/stable', './index.jsx']

    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.png'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src'),
            images: path.resolve(__dirname, '/assets/images'),
        }
    },
    optimization: optimization(),
    devServer: {
        port: process.env.PORT || 4300,
        hot: true,
        historyApiFallback: true,

        // contentBase: './target',
        // overlay: true,
        // noInfo: false,
        // before: require('../stub')(STUB !== 'false'),
        // stats: 'normal'
    },
    devtool: isDev ? 'source-map' : false,
    plugins: [
        new HTMLWebpackPlagin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin ({
            patterns: [{ 
            from: path.resolve(__dirname, "src/assets/favicon.ico"),
            to: path.resolve(__dirname, 'dist/assets') 
        }, {
            from: path.resolve(__dirname, 'src/assets/images'),
            to: path.resolve(__dirname, 'dist/img')
        }]}),
        new MiniCssExtractPlugin(
            {
            filename: filename('css'),
        }
        )
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders("less-loader")
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders("sass-loader")
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: () => {
                        return isDev ? 'img/[name][ext]' : 'img/[name].[contenthash][ext]';
                    }
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ["file-loader"]
            },
            {
                test: /\.xml$/,
                use: ["xml-loader"]
            },
            {
                test: /\.csv$/,
                use: ["csv-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoader()
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions('@babel/preset-typescript')
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions('@babel/preset-react')
                }
            }
        ]
    }

}
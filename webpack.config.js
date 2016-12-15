/**
 * Adapted from angular2-webpack-starter
 */

var webpack = require('webpack');

/**
 * Global Varibales
 */
var SRC_DIR = './src';
var BUNDLE_DIR = './bundles';
var LIBRARY_NAME = 'angular-library-starter';

/**
 * Webpack Plugins
 */
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },

    entry: './index.ts',

    output: {
        path: BUNDLE_DIR,
        publicPath: '/',
        filename: LIBRARY_NAME + '.umd.js',
        libraryTarget: 'umd',
        library: LIBRARY_NAME
    },

    // require those dependencies but don't bundle them
    externals: [/^\@angular\//, /^rxjs\//],

    module: {
        rules: [{
            enforce: 'pre',
            test: /\.ts$/,
            loader: 'tslint-loader',
            exclude: './node_modules'
        }, {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader?declaration=false',
            exclude: [/\.e2e\.ts$/]
        }]
    },

    plugins: [
        // fix the warning in ./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            SRC_DIR
        ),

        new webpack.LoaderOptionsPlugin({
            options: {
                tslintLoader: {
                    emitErrors: false,
                    failOnHint: false,
                    configFile: 'tslint.json'
                }
            }
        })
    ]
};
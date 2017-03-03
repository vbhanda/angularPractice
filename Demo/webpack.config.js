var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "config.js",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    context: './',
    externals: {},
    devtool: '#source-map',
    stats: {
        colors: true
    },
    resolve: {
    },
    module: {}
};
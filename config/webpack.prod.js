const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const path = require('path')
const rootDir = path.resolve(__dirname,"..")

module.exports = merge(commonConfig,{
    output: {
        path: path.resolve(rootDir, 'production'),
        publicPath: '/dist',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].[name].chunk.js'
    },
})
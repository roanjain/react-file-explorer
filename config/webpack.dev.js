const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const path = require('path')
const rootDir = path.resolve(__dirname,"..")

module.exports = merge(commonConfig,{
    devtool: 'cheap-module-eval-source-map',

    devServer: {
        port: 4000
    },
})
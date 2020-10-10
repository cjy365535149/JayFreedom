const path = require('path');
const webpack = require('webpack')

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  lintOnSave: false,
  devServer: {
  port: 8080,
  proxy:
  /* process.env.NODE_ENV !== 'production' ? */
   {  //配置跨域
    '/api': {
      target: 'http://localhost:8081',  //这里后台的地址模拟的;应该填写你们真实的后台接口
      changOrigin: true,  //允许跨域
      pathRewrite: {
        /* 重写路径
         */
        '^/api': '' 
      }
    },
  } 
},

  publicPath: '/jayfreedom/',
  configureWebpack:{
    resolve:{
      alias:{
        '@':path.resolve(__dirname, './src'),
        '@i':path.resolve(__dirname, './src/assets'),
      } 
    },
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      
      // 下面是下载的插件的配置
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5, 
        minChunkSize: 100
      })
    ]
  }
}
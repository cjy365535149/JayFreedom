module.exports = {
  lintOnSave: false,

  //jay add start
  //jay add end
  devServer: {
  port: process.env.NODE_ENV === 'production' ? 8080 : 8081,
  proxy: {  //配置跨域
    '/api': {
      target:
       process.env.NODE_ENV === 'production' ? 'http://localhost:8080/jayequality' : 'http://localhost:8080',  //这里后台的地址模拟的;应该填写你们真实的后台接口
      changOrigin: true,  //允许跨域
      pathRewrite: {
        /* 重写路径
         */
        '^/api': '' 
      }
    },
  }
},

  publicPath: '/jayfreedom/'
}
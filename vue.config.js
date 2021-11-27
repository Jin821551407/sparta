module.exports = {
    lintOnSave: false,
    devServer: {
      proxy: {
        '/api': {
          target: 'https://elm.cangdu.org',
          pathRewrite: {'^/api' : ''},
          changeOrigin:true
        },
      },
    },
    build:{
      assetsPublicPath:'./'
    }
}

const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: '/',
  lintOnSave: false,
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  configureWebpack: {
    externals: {
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT',
      axios: 'axios',
      qs: 'Qs'
    },
    plugins: [
      new CompressionPlugin({
        test: /\.(js|css)(\?.*)?$/i, // 需要压缩的文件正则
        threshold: 10240, // 文件大小大于这个值时启用压缩
        deleteOriginalAssets: false// 压缩后保留原文件
      })
    ]
  },
  devServer: {
    port: 8080
  }
}

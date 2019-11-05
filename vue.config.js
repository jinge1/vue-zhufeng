const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  devServer: {
    port: 8008,
  },
  configureWebpack: config => {
    return {
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src')
        }
      }
    }
  }
}
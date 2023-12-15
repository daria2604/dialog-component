const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/dist',

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/abstracts/variables.scss";`
      },
    }
  },

  pluginOptions: {
    svgSprite: {
      dir: 'src/assets/icons',
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {
          extract: true,
          spriteFilename: 'img/icons.[hash:8].svg'
      },
      pluginOptions: {
          plainSprite: true
      }    
    },  
  },
    
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
})

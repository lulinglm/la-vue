const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src')
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear();
    // 添加要替换的 loader
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        bypass: function (req, res) {
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.')
            return '/index.html'
          } else if (process.env.MOCK !== 'none') {
            const name = req.path
              .split('/api/')[1]
              .split('/')
              .join('/')
            const mock = require(`./mock/${name}`)
            console.log(`./mock/${name}`)
            const result = mock(req.method)
            delete require.cache[require.resolve(`./mock/${name}`)]
            res.send(result) // 跳过转发
            return false
          }
        }
      }
    }
  }
}

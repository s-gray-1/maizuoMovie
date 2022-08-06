// vue项目的配置文件 覆盖，

module.exports = {
  lintOnSave: false, // 暂时关闭代码格式检测
  // configWebpack
  // 配置反向代理，
  devServer: {
    proxy: {
      // '/ajax': {
      //   target: 'https://m.maoyan.com',
      //   changeOrigin: true
      // }

      '/kerwin': {
        target: 'https://m.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/kerwin': ''
        }
      }
    }
  }
}

// https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=74B5F0A032A711EB82DD6B9282E93C676D27D7B9731D4E608D7612C3E708C120&optimus_risk_level=71&optimus_code=10

// https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=74B5F0A032A711EB82DD6B9282E93C676D27D7B9731D4E608D7612C3E708C120&optimus_risk_level=71&optimus_code=10

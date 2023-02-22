module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // 如果使用element-ui需要调整官网的配置
    ['@babel/preset-env', { modules: false }]
  ],
  // 插件
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}

const webpack = require('webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = function override (config) {
  const fallback = config.resolve.fallback || {}
  Object.assign(fallback, {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify'),
    url: require.resolve('url')
  })
  config.resolve.fallback = fallback

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    }),
    new NodePolyfillPlugin()
  ])
  config.experiments = {
    topLevelAwait: true // experiments에 topLevelAwait를 추가합니다.
  }

  // 이거좀 알아봐바ㅏ
  // config.resolve.alias = {
  //     ...config.resolve.alias,
  //     'crypto': require.resolve('crypto-browserify'),
  //     'stream': require.resolve('stream-browserify'),
  //     'assert': require.resolve('assert'),
  //     'http': require.resolve('stream-http'),
  //     'https': require.resolve('https-browserify'),
  //     'os': require.resolve('os-browserify'),
  //     'url': require.resolve('url'),
  //   };

  // config.externals={
  //     "node:crypto":"crypto",
  // }

  return config
}

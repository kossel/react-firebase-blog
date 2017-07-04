const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('../configs/webpack.config.prod');

config.plugins.push(new BundleAnalyzerPlugin());

const compiler = webpack(config);
console.log('Analyzing the bundle...');

compiler.run((error, stats) => {
  if (error) {
    throw new Error(error);
  }

  console.log(stats);
});

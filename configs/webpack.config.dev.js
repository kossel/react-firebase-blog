const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json'],
  },
  devtool: 'eval-source-map',
  entry: [
    // must be first entry to properly set public path
    // 'whatwg-fetch',
    './main/webpack-public-path',
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'main/index.web.js'),
  ],
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: path.resolve(__dirname, 'main/dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: 'main/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      noInfo: true, // set to false to see a list of every file being bundled.
      options: {
        lessLoader: {
          includePaths: [path.resolve(__dirname, 'src', 'less')],
        },
        context: '/',
        postcss: () => [autoprefixer],
      },
    }),
  ],
  module: {
    rules: [
      { test: /\.jsx?$/,
        exclude: /(node_modules|android|ios|app)/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            'env',
            'react',
            'stage-2',
            'react-hmre',
          ],
          plugins: [
            ['react-intl', {
              messagesDir: './main/web/translations/',
            }],
            [
              'import',
              {
                libraryName: 'antd',
                style: true,
              },
            ],
          ],
        },
      },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
          `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`,
        ],
      },
    ],
  },
};

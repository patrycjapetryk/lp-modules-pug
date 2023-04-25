const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
    // background: './src/js/background.js',
    // player: './src/js/player.js',
    // products: './src/js/fullscreen.js',
    // fullscreen: './src/js/products.js',
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: __dirname + '/dist/',
    // assetModuleFilename: 'images/[name].[hash:8][ext][query]',
    assetModuleFilename: 'images/[name][ext][query]',
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: {
            list: [
              {
                tag: 'img',
                attribute: 'src',
                type: 'src',
              },
              {
                tag: 'source',
                attribute: 'srcset',
                type: 'src',
              },
              {
                tag: 'source',
                attribute: 'src',
                type: 'src',
              },
              {
                tag: 'source',
                attribute: 'data-src',
                type: 'src',
              },
              {
                tag: 'video',
                attribute: 'poster',
                type: 'src',
              },
            ],
          },
          minimize: false,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.mp4|webm$/i,
        type: 'asset/resource',
        generator: {
          // filename: 'video/[name][hash:8][ext][query]',
          filename: 'video/[name][ext][query]',
        },
      },
    ],
  },
  plugins: [
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: 'public',
    //       globOptions: {
    //         ignore: ['**/*.DS_Store'],
    //       },
    //     },
    //   ],
    // }),
    new HtmlWebpackPlugin({
      template: './src/pages/index.pug',
      inject: 'body',
      chunks: ['index'],
      filename: 'index.html',
      minify: false,
    }),
  ],
};

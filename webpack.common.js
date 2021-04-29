const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    //something : `./loc/name`,
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      //title is taken from the template
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        //https://webpack.js.org/guides/asset-modules/
        //With this configuration all the html files will be emitted into a static directory within the output directory.
        //Rule.generator.filename is the same as output.assetModuleFilename and works only with asset and asset/resource module types.

        generator: {
          filename: 'images/[name][hash][ext][query]',
        },
      },
    ],
  },

  /*// in case you have multiple vendors its important to Cach your data, prevent the client from downloading all the data every time,
  // make the client downloaded just the update and not the whole things, https://webpack.js.org/guides/caching/
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  */
};

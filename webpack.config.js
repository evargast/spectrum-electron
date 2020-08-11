const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const createElectronReloadWebpackPlugin = require('electron-reload-webpack-plugin');

// Create one plugin for both renderer and main process
const ElectronReloadWebpackPlugin = createElectronReloadWebpackPlugin({
  path: path.join(__dirname, './dist/electron.js'),
  logLevel: 0,
});

module.exports = [
  {
    mode: 'development',
    entry: './src/electron.ts',
    target: 'electron-main',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          sideEffects: true,
        },
        {
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: 'ts-loader' }],
        },
      ],
    },
    output: {
      path: __dirname + '/dist',
      filename: 'electron.js',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.svg', '.css', '.json'],
    },
  },
  {
    mode: 'development',
    entry: './src/react.tsx',
    target: 'electron-renderer',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          sideEffects: true,
        },
        {
          test: /\.ts(x?)$/,
          include: /src/,
          use: [{ loader: 'ts-loader' }],
        },
        {
          test: /\.js$/,
          use: ['source-map-loader'],
          enforce: 'pre',
        },
      ],
    },
    output: {
      path: __dirname + '/dist',
      filename: 'react.js',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.svg', '.css', '.json'],
    },
    performance: {
      hints: false,
    },
    stats: {
      modules: false,
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      ElectronReloadWebpackPlugin(),
    ],
  },
];

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'), //needs to be an absolute path
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(jsx|js)$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            use: [{
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', {
                    "targets": "defaults" 
                  }],
                  '@babel/preset-react'
                ]
              }
            }]
          },
          {
            test: /\.scss$/,
            use:[
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        ]      
      },
    devtool: 'eval-cheap-module-source-map', //shows source file for debugging
    devServer: {
      contentBase: path.join(__dirname, 'public')
    }
};
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    library: 'ui-blue',
    libraryTarget: 'commonjs2'
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    '@emotion/core': {
      root: '@emotion/core',
      commonjs2: '@emotion/core',
      commonjs: '@emotion/core',
      amd: '@emotion/core'
    }
  }
};

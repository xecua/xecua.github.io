// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const webpack = require('webpack');

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      })
    );

    return config;
  },
};

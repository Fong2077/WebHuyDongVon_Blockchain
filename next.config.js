/** @type {import('next').NextConfig} 
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig*/
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        net: false,
        tls: false,
        fs: false,
        path: false,
        crypto: false,
        stream: false,
        assert: false,
        http: false,
        https: false,
        os: false,
      };

      config.plugins.push(new NodePolyfillPlugin());
    }

    return config;
  },
};


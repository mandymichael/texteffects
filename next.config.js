module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      })
  
      return config
    },
    productionBrowserSourceMaps: true,
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
    },
    async rewrites() {
      return [
        {
          source: '/demos/goldtext',
          destination: '/demos/goldtext.html'
        }
      ]
    }
  }

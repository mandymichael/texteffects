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
  //   async rewrites() {
  //     return [
  //       {
  //         source: '/goldtext',
  //         destination: '/demos/goldtext/goldtext.html'
  //       },
  //       {
  //         source: '/silvertext',
  //         destination: '/demos/silvertext/silvertext.html'
  //       },
  //       {
  //         source: '/freezetext',
  //         destination: '/demos/freezetext/freezetext.html'
  //       }
  //     ]
  //  }
  }


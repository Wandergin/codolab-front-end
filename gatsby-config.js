require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js

    siteTitleAlt: `Codo Lab`,
    siteTitle: `Codo Lab`,
    siteTitleAlt: `Codo Lab`,
    siteHeadline: `Codo Lab`,
    siteUrl: `https://www.codolab.com/`,
    siteDescription: `Codo Lab - We transform requirements into products.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `Codo Lab`,
    basePath,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Codo Lab`,
        short_name: `Codo Lab`,
        description: `Codo Lab - We transform requirements into products.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/codo@192x192.jpg`,
            sizes: `192x192`,
            type: `image/jpg`,
          },
          {
            src: `/codo@512x512.jpg`,
            sizes: `512x512`,
            type: `image/jpg`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}

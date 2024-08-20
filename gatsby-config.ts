import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.mjs
    siteTitleAlt: `Codo Lab`,
    siteTitle: `Codo Lab`,
    siteHeadline: `Codo Lab`,
    siteUrl: `https://www.codolab.com/`,
    siteDescription: `Codo Lab - We transform requirements into products.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `Codo Lab`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-6MCCT7RH6G", // Replace with your Google Analytics Measurement ID
          "GT-K8D5MJ73"
        ],
        // This object is passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
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
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Decha Portfolio",
    description: "This is Decha's Portfolio Site",
    author: "@Decha777",
    siteUrl: "https://decha.netlify.app",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `${__dirname}/src/assets/logo.svg`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://decha-blog-api.herokuapp.com`,
        // apiURL: `http://localhost:1337`,

        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
  ],
}

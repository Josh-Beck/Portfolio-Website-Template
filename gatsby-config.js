/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    pathPrefix: `/Portfolio-Website-Template`,
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [],
              }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'static/logo.png',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `content`,
              path: `${__dirname}/src/content/data/`,
            },
        }
    ],
}
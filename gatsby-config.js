module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `partners`,
        path: `${__dirname}/partners`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/projects`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`
  ]
}
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
        path: `${__dirname}/blog`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`
  ]
}

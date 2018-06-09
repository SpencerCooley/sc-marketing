module.exports = {
 siteMetadata: {
    title: `Spencer Cooley | Full Stack Developer`,
    siteUrl: `https://www.spencercooley.com`,
    description: `Full stack developer specializing in django develpment.`,
  },
  plugins: [
   `gatsby-plugin-react-helmet`,

   `gatsby-plugin-styled-components`,

   {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
   },
   {
  resolve: 'gatsby-plugin-material-ui',
    options: {
      pathToTheme: 'src/themes/default',
    },
  },

  ],
};

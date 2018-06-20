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
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-97451152-1",
      // Puts tracking script in the head instead of the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ["/preview/**", "/do-not-track/me/too/"],
    },
  },

  ],
};

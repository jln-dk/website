module.exports = {
  siteMetadata: {
    description: "Personal website of Jesper Lund - software engineer from Denmark.",
    locale: "en",
    title: "Jesper Lund - JLN Consult",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: {
          'back': '#e8eaef',
          'front': '#1f1f1f',
          'lead': '#eee841',
          'lead-text': '#1f1f1f',
          'line': '#cfd1d7',
          'skill-1': '#3178c6',
          'skill-2': '#61dafb',
          'skill-3': '#E10098',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-31459479-7",
      },
    },
  ],
}
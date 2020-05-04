// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Tristan M. Norton',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.SPACE_ID, // required
        accessToken: process.env.API_TOKEN, // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ]
}

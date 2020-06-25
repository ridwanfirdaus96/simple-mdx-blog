module.exports = {
  siteMetadata: {
    title: 'My MDX Blog',
    description: 'A simple blog built with Gatsby and MDX',
    url: 'https://skillthrive.com',
    image: '/office.jpg',
    twitterUsername: '@ridwanfirdaus96',
    author: 'Ridwan Firdaus'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extension: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'roboto mono',
          'muli:499,400i,700,700i'
        ],
        display: 'swap'
      }
    }
  ]
}

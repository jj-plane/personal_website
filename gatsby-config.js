module.exports = {
  siteMetadata: {
    title: `joshuaaggas.com`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-plugin-sass", "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/images`
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": `${__dirname}/src/pages/`
    },
    __key: "pages"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'markdown-pages',
      path: `${__dirname}/src/posts`
    }
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins:[
        {
          resolve: `gatsby-remark-images`,
          options: {
            wrapperStyle: 'background-color:red;'
          }
        },
        {
          resolve: `gatsby-remark-image-attributes`,
          options: {
            dataAttributes: true
          }
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {}
        }
      ]
    }
  },
  {
    resolve: 'gatsby-plugin-google-fonts',
    options:{
      fonts: [
        `Roboto\:100,300,400,500,700`
      ],
      display: 'swap'
    }
  },
  ]
};
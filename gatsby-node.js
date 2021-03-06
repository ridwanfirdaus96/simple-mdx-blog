exports.createPages = async function ({ actions, graphql }) {
  const path = require('path')
  const { data } = await graphql(`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            edges {
              node {
                frontmatter {
                  slug
                }
                id
              }
            }
        }
    }
  `)

  // Create paginated pages for posts

  const postPerPage = 3

  const numPages = Math.ceil(data.allMdx.egdes.length / postPerPage)

  // error token => if for each has (), not (())
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? '/' : `/${i + 1}`,
      component: path.resolve('./src/templates/allPosts.js'),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1
      }
    })
  })

  // Create single blog posts
  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    actions.createPage({
      path: slug,
      component: path.resolve('./src/templates/singlePost.js'),
      context: { id }
    })
  })
}

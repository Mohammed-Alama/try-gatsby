import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPage = ({ data }) => (
  <Layout>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted By {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
        <br/>
        <br/>
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <hr/>
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
            author         
          }
        }
      }
    }
}
`

export default BlogPage

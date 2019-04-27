import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// this prop will be injected by the GraphQL query below.
export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Link to={"/blog"}>Go Back</Link>
      <hr/>
      <h1>{frontmatter.title}</h1>
      <h4>Posted By {frontmatter.author} on {frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: html }}/>
    </Layout>

  )
}

export const postQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`
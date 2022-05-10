import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import "../styles/post.scss"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
      <Layout>
            <h1 className="blogTitle">{frontmatter.title}</h1>
            <h2 className="blogDate">{frontmatter.date}</h2>
            <div
              className="blogLayout"
              dangerouslySetInnerHTML={{ __html: html }}
            />


      </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
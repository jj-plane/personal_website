import * as React from "react"
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"

import { graphql, Link } from 'gatsby'


import '../styles/reset.scss'


// markup
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  }
}) => {


  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} className="postLink" post={edge.node} />)

  return (
        <Layout>
          <div className="heroContainer" onMouseEnter={console.log('enter')}>
            <div className="greetingContainer">
              <h1>Hi</h1>
            </div>
            <div className="selfieContainer">
              <StaticImage className="selfie" src="../images/Joshua_Aggas_Selfie.png" alt="Joshua Aggas selfie" ></StaticImage>
            </div>
            <div className="shortDescriptionContainer">
              <h2>I'm Joshua. I'm a Pittsburgh based <span className="accent">web developer</span> with a decade of experience. I use this space to muse about my work and media I'm consuming.</h2>
            </div>
          </div>
          <div className="postContainer">
            <div className="postContainerHeadings">
              <p>Latest</p>
            </div>
            <div className="postListing">
              {Posts}       
            </div>
          </div>
        </Layout>
  )
}

export default IndexPage


export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {order: DESC, fields: frontmatter___date}
      filter: {}
      limit: 5
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
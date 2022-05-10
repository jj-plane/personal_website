import React from "react"
import { Link } from "gatsby"


const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug} onMouseOver={post.animate} className="postLink">
      <span>{post.frontmatter.title}</span> <span className="">{post.frontmatter.date}</span>
    </Link>
  </div>
)

export default PostLink
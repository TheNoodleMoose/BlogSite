import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const Archive = () => (
  <StaticQuery
    query={graphql`
      query BlogPostArchive {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                slug
                id
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          {allMarkdownRemark.edges.map(post => (
            <li key={post.node.frontmatter.id}>
              {post.node.frontmatter.title}
            </li>
          ))}
        </aside>
      </>
    )}
  />
);
Archive.propTypes = {
  children: PropTypes.node.isRequired
};

export default Archive;

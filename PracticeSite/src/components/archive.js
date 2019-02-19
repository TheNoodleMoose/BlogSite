import React from "react";

import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import styled from "styled-components";

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
`;

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <ArchiveContainer>
          <h3>Recent Post</h3>
          <ul>
            {allMarkdownRemark.edges.map(post => (
              <li key={post.node.frontmatter.slug}>
                <Link to={`/posts/${post.node.frontmatter.slug}`}>
                  {post.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </ArchiveContainer>
      </>
    )}
  />
);

export default Archive;

const ArchiveContainer = styled.aside`
  margin: 10px 30px;
  background: rgba(11, 34, 65, 0.3);
  border-radius: 15px;
  text-align: center;
`;

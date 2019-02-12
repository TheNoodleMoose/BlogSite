import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

import SEO from "../components/seo";

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date
            title
            slug
            id
          }
        }
      }
    }
  }
`;

const Listing = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={LISTING_QUERY}
      render={({ allMarkdownRemark }) =>
        allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.frontmatter.id}>
            <Link to={`/posts/${node.frontmatter.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
            <Link to={`/posts/${node.frontmatter.slug}`}>Read More</Link>
          </article>
        ))
      }
    />
  </div>
);

export default Listing;

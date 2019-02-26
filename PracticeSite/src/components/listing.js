import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
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
          <Post key={node.frontmatter.id}>
            <PostContainer>
              <Link to={`/posts/${node.frontmatter.slug}`}>
                <PostTitle>{node.frontmatter.title}</PostTitle>
              </Link>
              <p>{node.excerpt}</p>
              <InfoContainer>
                <PostDate>{node.frontmatter.date}</PostDate>
                <Link
                  style={{
                    background: `rgba(40, 61, 136, 0.3)`,
                    color: `#29328d`,
                    textDecoration: `none`,
                    display: `flex`,
                    flexDirection: "row",
                    justifyContent: `center`,
                    alignItems: `center`,
                    width: `105px`,
                    height: `20px`,
                    fontSize: `14px`,
                    borderRadius: `30px`,
                    margin: `0 5px`
                  }}
                  to={`/posts/${node.frontmatter.slug}`}
                >
                  Read More
                </Link>
              </InfoContainer>
            </PostContainer>
          </Post>
        ))
      }
    />
  </div>
);

export default Listing;

const Post = styled.article`
  background: rgba(11, 34, 65, 0.3);
  border-radius: 10px;
  margin: 10px 0 46px 0;
  -webkit-box-shadow: 0px 1px 15px 0px rgba(68, 68, 81, 0.6);
  box-shadow: 0px 1px 15px 0px rgba(68, 68, 81, 0.6);
`;

const PostContainer = styled.div`
  margin: 10px;
  color: #29328d;
  font-size: 24px;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
`;

const PostTitle = styled.h2`
  text-decoration: underline #e5e5e5;
  color: #29328d;
`;

const PostDate = styled.p`
  background: rgba(40, 61, 136, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 105px;
  height: 20px;
  font-size: 14px;
  margin: 0 5px;
`;

const InfoContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 10px;
`;

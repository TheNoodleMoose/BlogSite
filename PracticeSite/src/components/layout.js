import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Spring } from "react-spring/renderprops";
import styled from "styled-components";
import Header from "./header";
import "./layout.css";
import Archive from "./archive";

const SITE_TITLE_QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    file(relativePath: { regex: "/bg/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Layout = ({ children, location }) => (
  <StaticQuery
    query={SITE_TITLE_QUERY}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Spring
          from={{ height: location.pathname === "/" ? 100 : 200 }}
          to={{
            height: location.pathname === "/" ? 200 : 100
          }}
        >
          {styles => (
            <div style={{ overflow: "hidden", ...styles }}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          )}
        </Spring>

        <MainLayout>
          <main>{children}</main>
          <Archive />
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </MainLayout>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

Layout.defaultProps = {
  location: {}
};

export default Layout;

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 4fr 1fr;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import logo from "../images/profile_pic.png";

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <HeaderTitle>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: `flex`,
            flexDirection: "row",
            justifyContent: `flex-start`,
            alignItems: `center`
          }}
        >
          <img
            style={{
              width: "100px",
              height: "auto",
              borderRadius: `50%`
            }}
            src={logo}
            alt="ChristianHuffman"
          />
          <br />
          {siteTitle}
        </Link>
      </HeaderTitle>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;

const HeaderWrapper = styled.div`
  background: rebeccapurple;
  marginbottom: 1.45rem;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  img {
    margin: 0px;
  }
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

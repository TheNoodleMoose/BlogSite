import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const About = ({ location }) => (
  <Layout location={location}>
    <div>
      <h1>About Me</h1>
      <p>
        Lorem ipsum dolor amet yr man braid prism, microdosing freegan cred
        keffiyeh mixtape poutine vinyl. Pinterest fixie stumptown brunch DIY.
        Everyday carry occupy austin, vegan narwhal flannel venmo tumeric lomo
        gentrify af viral. Tote bag meh asymmetrical offal, chartreuse pitchfork
        keytar plaid. Hashtag lyft vaporware ethical austin organic man braid
        ennui meditation quinoa. Microdosing man braid listicle succulents.
        Intelligentsia etsy adaptogen activated charcoal seitan.
      </p>
    </div>
    <Link to="/">Go Home</Link>
  </Layout>
);

export default About;

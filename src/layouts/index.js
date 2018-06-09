import React from "react";
import Header from "../components/Header.js"
import WrapperMain from "./WrapperMain.js"
import Helmet from "react-helmet"
import me from "../images/me2sm.jpg"

export default ({ children }) => (
  <div>
  <Helmet >
   <title>Spencer Cooley | Full Stack Developer</title>
   <meta property="og:title" content="Spencer Cooley | Full Stack Developer" />
   <meta property="og:description" content="I am a full stack django developer that has been building things on the web since 2010" />
   <meta property="og:url" content="https://spencercooley.com" />
   <meta property="og:image" content={me} />
  </Helmet>

  <Header />
  <WrapperMain>
    {children()}
  </WrapperMain>
  </div>
);

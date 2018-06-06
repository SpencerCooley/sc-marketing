import React from "react";
import Header from "../components/Header.js"
import WrapperMain from "./WrapperMain.js"

export default ({ children }) => (
  <div>
  <Header />
  <WrapperMain>
    {children()}
  </WrapperMain>
  </div>
);

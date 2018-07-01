import React from "react";
import styled from "styled-components";
import logo from "../images/novadine-logo.png";

const HeaderNav = styled.nav`
  background-color:white;
  width:100%;
  position:fixed;
  top:0px;
  padding-bottom:10px;
  z-index:1000;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.55);

  img{
   position:relative;
   cursor:pointer;
   width:20%;
   display:block;
  }

  @media (max-width: 600px) {
      img{
       width:55%;
       display:block;
       margin:0 auto;

      }
  }
`;

const Header = () => (
    <HeaderNav>
      <img  style={{'marginLeft':'20px', 'marginBottom':'0px', 'width':'100px'}} src={logo} />
   </HeaderNav>
)

export default Header

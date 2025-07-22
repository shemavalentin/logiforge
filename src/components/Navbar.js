import React from "react";

import { Nav, NavLogo, NavLinks, StyledLink } from "../styles/navbar.styles";

const Navbar = () => {
  return (
    <Nav>
      <NavLogo>LogiForge</NavLogo>

      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

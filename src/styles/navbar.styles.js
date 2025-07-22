import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  background: #0f2027;
  display: flex;
  justfy-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const NavLogo = styled.h2`
  color: #00d1b2;
  font-weight: bold;
`;
export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-left: 5rem;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1rem;
  text-transform: uppercase;
  &:hover {
    color: #00d1b2;
  }
`;

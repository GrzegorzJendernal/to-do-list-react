import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName: "active",
}))`
    &.active {
      font-weight: bold;
    }
    
    text-decoration:none;
    color: #ffffff;
    `

const NavList = styled.ul`
display:grid;
grid-template-columns: auto auto;
justify-content:center;
grid-gap: 30px;
padding:20px;
list-style:none;
background-color:hsl(180, 100%, 25%);
margin: 0px;

`;

export { StyledNavLink, NavList };
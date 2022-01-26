import React from "react";
import styled from "styled-components";

import useNavbar from "../hooks/useNavbar";

const NavStyle = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly
  width: 100%;
  background-color: rgb(249, 229, 50);
  position: sticky;
  top: 0;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 120%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 50%;
`;

const Button = styled.div`
  text-decoration: none;
  text-shadow: black;
  color: black;
  text-shadow: black 1px 0 1px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const props = useNavbar();

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const NavBarButton = (buttonName, ref) => {
    return (
      <Nav>
        <Button onClick={() => handleScroll(ref)}>{buttonName}</Button>
      </Nav>
    );
  };

  return (
    <NavStyle>
      {NavBarButton("Bevezetés", props.bevezetesRef)}
      {NavBarButton("AutoML", props.automlRef)}
      {NavBarButton("Python", props.pythonRef)}
      {NavBarButton("R", props.rRef)}
      {NavBarButton("Demo", props.demoRef)}
      {NavBarButton("Összegzés", props.befejezesRef)}
      {NavBarButton("Összesítő táblázat", props.osszesitoTablazatRef)}
    </NavStyle>
  );
};

export default Navbar;

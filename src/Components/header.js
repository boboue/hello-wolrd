import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = () => (
  <>
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">My TODO App</NavbarBrand>
    </Navbar>
  </>
);

export { Header };

import React, { useState } from "react";
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import SignIn from "./SignIn";

const HomePage = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="home-nav"
        fixed="top"
        // variant="dark"
        expand="lg"
        {...args}
      >
        <NavbarBrand href="/">
          <strong>AweRecipes</strong>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/Home/">Home</NavLink>
            </NavItem>
          </Nav>
          <SignIn />
        </Collapse>
      </Navbar>
    </div>
  );
};
export default HomePage;

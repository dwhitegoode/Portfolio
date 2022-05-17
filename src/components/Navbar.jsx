import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import resume from "../assets/resume.pdf";
const NavbarComponent = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>David White-Goode</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#about-me">About me</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>

            <Nav.Link href="/#contact-info">Contact</Nav.Link>
            <Nav.Link download href={resume}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

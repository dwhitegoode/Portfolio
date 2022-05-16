import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import resume from "../assets/resume.pdf";
const ProjectNav = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container className="navbar">
        <Navbar.Brand>David White-Goode</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#about-me">About me</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Divider />
              <NavDropdown.Item href="/projects/#hater">Hater</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/projects/#theinnerbod">
                The Inner Bod
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/#flappybird">
                Flappy Bird
              </NavDropdown.Item>
            </NavDropdown>
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

export default ProjectNav;

import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Navbar.Toggle
        className="icon mt-5"
        aria-controls="navbarScroll"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse id="navbarScroll" className="navbar-nav mt-3">
        <Nav>
          <NavLink className="nav-link" as={Link} to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" as={Link} to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" as={Link} to="/projects">
            Projects
          </NavLink>
          <NavLink className="nav-link" as={Link} to="/contact">
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

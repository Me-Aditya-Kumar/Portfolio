import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top ">
      <div className="container ">
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="Logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-3">
            <li className="nav-item">
              <AnchorLink
                className="nav-link zoom-link"
                href="#home"
                offset={100}
              >
                Home
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                className="nav-link zoom-link"
                href="#about"
                offset={60}
              >
                About Me
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                className="nav-link zoom-link"
                href="#skills"
                offset={100}
              >
                Skills
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                className="nav-link zoom-link"
                href="#projects"
                offset={100}
              >
                Projects
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                className="nav-link zoom-link"
                href="#certifications"
                offset={70}
              >
                Certifications
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                offset={100}
                href="#contact"
                className="connect btn btn-danger rounded-pill fw-bold border-0"
              >
                Connect
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

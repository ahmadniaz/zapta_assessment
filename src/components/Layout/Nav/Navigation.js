import React, { useState, useEffect } from "react";
import { Collapse, Container, NavbarToggler, NavLink, Row } from "reactstrap";
import mobileMenu from "../../../assets/icons/mobile-menu.svg";
import "./Nav.css";

// Import Images
import ContactBar from "./ContactBar";

const Navbar = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [navClass, setnavClass] = useState("");

  const toggle = () => setisOpenMenu(!isOpenMenu);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  const scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setnavClass("is-sticky");
    } else {
      setnavClass("");
    }
  };

  return (
    <>
      <ContactBar />
      <Row className="mt-3">
        <nav className={"navbar navbar-expand-lg " + navClass} id="navbar">
          <Container>
            <NavbarToggler
              className="navbar-toggler py-0 fs-20 text-body"
              onClick={toggle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img src={mobileMenu} alt="Mobile Nav" width="30px" />
            </NavbarToggler>

            <Collapse
              isOpen={isOpenMenu}
              className="navbar-collapse justify-content-around"
              id="navbarSupportedContent"
            >
              <li className="nav-item">
                <NavLink className="fs-15" href="#hero">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="fs-15" href="#services">
                  Chi Siamo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="fs-15" href="#features">
                  S.I.R.E
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="fs-15" href="#plans">
                  SIRE Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="fs-15" href="#reviews">
                  Why SIRE?
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="fs-15" href="#team">
                  SIRE Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="fs-15" href="#contact">
                  How it Works?
                </NavLink>
              </li>
            </Collapse>
          </Container>
        </nav>
      </Row>
    </>
  );
};

export default Navbar;

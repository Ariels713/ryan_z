import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  NavLink,
} from "reactstrap";
// core components

function WhiteNavbar() {
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  });
  return (
    <>
      <Navbar className="fixed-top" expand="lg" id="navbar-main">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/" tag={Link}>
              Ryan Zarb
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink tag={Link} to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem className="active">
                <NavLink tag={Link} to="/properties">
                  Featured Properties <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem className="active">
                <NavLink tag={Link} to="/sell">
                  Sell <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem className="active">
                <NavLink tag={Link} to="/about">
                  About <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem className="active">
                <NavLink tag={Link} to="/contact">
                  Contact <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button tag={Link} to="/signup" color="primary">
                  Log On
                  {/* <i className="nc-icon nc-sound-wave" /> Contact */}
                </Button>
              </NavItem>
              <NavItem className="active">
                <Button className="btn-link" color="primary">
                  631 553-1413
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default WhiteNavbar;

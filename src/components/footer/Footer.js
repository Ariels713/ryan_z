/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Button } from "reactstrap";

// core components

function FooterBlack() {
  return (
    <>
      <div>
        <footer className="footer footer-white ">
          <Container>
            <Row>
              <nav className="footer-nav">
                <ul>
                  <li>
                    <h6>Ryan Zarb</h6>
                  </li>
                  <li>
                    <h6>Mobile: 631 553-1413</h6>
                  </li>
                  <li>
                    <h6>Office: 201.798.3300</h6>
                  </li>
                  <li>
                    <h6>Office: 201.798.3300</h6>
                  </li>
                  <li>
                    <h6>Email: ryan.zarb@cbmoves.com</h6>
                  </li>
                  <li>
                    <h3 style={{ margin: "0", marginLeft: "10px" }}>
                      <Button className="btn-just-icon" color="danger">
                        <i className="fa fa-instagram"></i>
                      </Button>
                    </h3>
                  </li>
                  <li>
                    <h3 style={{ margin: "0", marginLeft: "10px" }}>
                      <Button className="btn-just-icon" color="danger">
                        <i className="fa fa-facebook"></i>
                      </Button>
                    </h3>
                  </li>
                </ul>
              </nav>
            </Row>
          </Container>
        </footer>
      </div>
    </>
  );
}

export default FooterBlack;

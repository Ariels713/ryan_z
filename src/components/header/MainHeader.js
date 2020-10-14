/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core comments

function PresentationHeader() {
  return (
    <>
      <div className="wrapper">
        <div
          className="page-header section-dark"
          style={{
            backgroundImage:
              "url(" +
              require("../../assets/siteImages/main_header_image.jpg") +
              ")",
          }}
        >
          <div className="content-center">
            <Container>
              <div style={{ backgroundColor: `rgba(53, 181, 184, 0.3)` }}>
                <h2
                  className="presentation-subtitle text-center"
                  style={{ color: "#fff", padding: "2%" }}
                >
                  <strong>A Home Changes Everything. Let's Find Yours.</strong>
                </h2>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default PresentationHeader;

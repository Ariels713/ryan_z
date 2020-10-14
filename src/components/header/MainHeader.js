/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, UncontrolledCarousel } from "reactstrap";
// core comments

const carouselItems = [
  {
    src: "../../assets/img/siteImages/main_header_image.jpg",
    altText: "Slide 1",
    caption: "",
  },
  {
    src: "../../assets/img/siteImages/main_header_image1.jpg",
    altText: "Slide 1",
    caption: "",
  },
];

function PresentationHeader() {
  return (
    <>
      <div className="wrapper">
        <div
          className="page-header section-dark"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/siteImages/main_header_image.jpg") +
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

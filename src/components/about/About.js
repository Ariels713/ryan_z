import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionHeader() {
  return (
    <>
      {/* ********* FEATURES 4 ********* */}
      <div className="features-4">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Ryan Zarb</h2>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <div className="ipad-container">
                <img
                  alt="..."
                  src={require("../../assets/siteImages/headShot.jpg")}
                />
              </div>
            </Col>
            <Col className="offset-1" md="4">
              <div className="info info-horizontal">
                <div className="icon icon-info">
                  <i aria-hidden={true} className="nc-icon nc-bank" />
                </div>
                <div className="description">
                  <h4 className="info-title">Find Your Next Home</h4>
                  <p>
                    You need someone who knows this area inside and out! I can
                    work with you to find the right home at the right price for
                    you, including all the neighborhood amenities that matter -
                    not to mention the essential criteria you have for your
                    ideal home
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-success">
                  <i aria-hidden={true} className="nc-icon nc-money-coins" />
                </div>
                <div className="description">
                  <h4 className="info-title">Sell A Home</h4>
                  <p>
                    When it's time to move, you need someone who will advertise
                    your home, show to prospective buyers, negotiate the
                    purchase contract, arrange financing, oversee the
                    inspections, handle all necessary paperwork and supervise
                    the closing. I can take care of everything you need, from
                    start to close.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-danger">
                  <i aria-hidden={true} className="nc-icon nc-bulb-63" />
                </div>
                <div className="description">
                  <h4 className="info-title">
                    Consult on Home Selling Tactics
                  </h4>
                  <p>
                    Oftentimes buyers don't visualize living in your home the
                    way you do. I can make your home attractive to its ideal
                    audience - which can help you get top dollar. Things like
                    staging the home, making repairs or minor improvements, or
                    even simply painting the walls can be the difference between
                    a home resting on the market and one that's sold fast.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="separator" />
          <Row>
            <Col className="ml-auto mr-auto text-center" md="10">
              <h2 className="title">
                Here are some of the things I can do for you:
              </h2>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="10">
              <h5 className="description">
                Ryan Zarb’s passion for real estate and home design go as far
                back as he can remember. As a child at a restaurant— given
                activity sheets to color, he would flip them over and draw homes
                of different styles.
              </h5>
              <h5 className="description">
                After a successful career in fashion, Ryan was ready to pursue
                his longed desire for a career in real estate.As a native New
                Yorker, moving to NJ had never really been something Ryan had
                considered. However, having taken his course in Hoboken he began
                to fall in love with Hudson county and chose to relocate after
                living in Manhattan for 8 years!
              </h5>
              <h5 className="description">
                Ryan's passion, eye for detail and vision for great potential in
                homes, makes him a dependable and resourceful agent for his
                clients— committed to achieving their dreams within their means.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionHeader;

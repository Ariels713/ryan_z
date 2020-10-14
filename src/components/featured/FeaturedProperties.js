import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

// core components

function SectionCards() {
  return (
    <>
      <div className="section section-white" id="cards">
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Featured Properties</h2>
            <h5 className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </h5>
          </Col>
          <div className="separator" />
        </Row>
        <Container className="tim-container">
          <Row>
            <Col md="4" sm="6">
              <Card className="card-blog">
                <div className="card-image">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src="https://dl.airtable.com/.attachmentThumbnails/636418d0975f07bd62b3440d1f93e2e3/e7cef6da"
                    />
                  </a>
                </div>
                <CardBody>
                  <h6 className="card-category text-success">$350,000</h6>
                  <CardTitle tag="h4">6050 blvd east</CardTitle>
                  <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div>
                  <hr />
                  <CardFooter className="text-center">
                    <div className="author">
                      <Button
                        className="btn-link text-center"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        See more
                      </Button>
                    </div>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" sm="6">
              <Card className="card-blog">
                <div className="card-image">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src="https://dl.airtable.com/.attachmentThumbnails/636418d0975f07bd62b3440d1f93e2e3/e7cef6da"
                    />
                  </a>
                </div>
                <CardBody>
                  <h6 className="card-category text-success">$350,000</h6>
                  <CardTitle tag="h4">6050 blvd east</CardTitle>
                  <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div>
                  <hr />
                  <CardFooter className="text-center">
                    <div className="author">
                      <Button
                        className="btn-link text-center"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        See more
                      </Button>
                    </div>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" sm="6">
              <Card className="card-blog">
                <div className="card-image">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src="https://dl.airtable.com/.attachmentThumbnails/636418d0975f07bd62b3440d1f93e2e3/e7cef6da"
                    />
                  </a>
                </div>
                <CardBody>
                  <h6 className="card-category text-success">$350,000</h6>
                  <CardTitle tag="h4">6050 blvd east</CardTitle>
                  <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div>
                  <hr />
                  <CardFooter className="text-center">
                    <div className="author">
                      <Button
                        className="btn-link text-center"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        See more
                      </Button>
                    </div>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionCards;

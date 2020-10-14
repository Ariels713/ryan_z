import React from "react";

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

function SectionPreFooterAreas() {
  return (
    <>
      <div className="subscribe-line">
        <Container>
          <h2 className="title">Subscribe To My Newsletter!</h2>
          <Row>
            <Col lg="9" md="8" sm="8">
              <Form>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Enter your email..."
                    type="text"
                  />
                </FormGroup>
              </Form>
            </Col>
            <Col md="3" sm="4">
              <Button block color="danger" size="lg" type="button">
                Subscribe!
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="separator" />
    </>
  );
}

export default SectionPreFooterAreas;

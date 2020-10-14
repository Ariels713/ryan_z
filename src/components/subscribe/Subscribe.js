import React, { useState } from "react";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log(name, email);
  const resetForm = () => {
    setName("");
    setEmail("");
  };

  const submitHandler = async (event) => {
    console.log("testing");
    event.preventDefault();
    try {
      await fetch("/.netlify/functions/newsLetter", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
        }),
      });
      resetForm();
    } catch (err) {
      console.error(err);
    }
    // console.log(name, email);
  };
  return (
    <>
      <div className="subscribe-line">
        <Container>
          <h2 className="title">Subscribe To My Newsletter!</h2>
          <Form onSubmit={submitHandler}>
            <Row>
              <Col md="4">
                <Input
                  placeholder="Enter your name..."
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col md="4">
                <Input
                  placeholder="Enter your email..."
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
              <Col md="4" sm="4">
                <Button block color="danger" size="lg" type="button">
                  Subscribe!
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
      <div className="separator" />
    </>
  );
}

export default SectionPreFooterAreas;

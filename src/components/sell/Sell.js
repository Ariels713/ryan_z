import React from "react";
// react plugin used to create switch buttons
// import Switch from "react-bootstrap-switch";
// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Label,
} from "reactstrap";

// core components
import SellHeader from "./SellHeader";

function Settings() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("settings-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("settings-page");
    };
  });
  return (
    <>
      <SellHeader />
      <div className="wrapper">
        <div className="profile-content section">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">What is my home worth?</h2>
              <h5 className="description">
                Receive a custom evaluation for your home, including comparisons
                to other homes that have recently sold or are on the market.
                This guarantees you receive the most accurate information
                available. To find out what your home is worth, fill out the
                information below:
              </h5>
            </Col>
          </Row>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <Form className="settings-form">
                  <Row>
                    <Col md="6" sm="6">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          className="border-input"
                          placeholder="Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="6">
                      <FormGroup>
                        <label>Zip - Postal Code</label>
                        <Input
                          className="border-input"
                          placeholder="Zip - Postal Code"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="4" sm="4">
                      <FormGroup>
                        <label htmlFor="bed-select">Beds</label>
                        <Input id="bed-select" type="select">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="4" sm="4">
                      <FormGroup>
                        <label htmlFor="bath-select">Baths</label>
                        <Input id="bath-select" type="select">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="4" sm="4">
                      <FormGroup>
                        <label>Sq. Ft.</label>
                        <Input
                          className="border-input"
                          placeholder="Square Footage"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>

                {/* <div className="text-center">
                    <Button
                      className="btn-wd btn-round"
                      color="info"
                      type="submit"
                    >
                      Save
                    </Button>
                  </div> */}
                {/* </Form> */}
              </Col>
            </Row>
          </Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">I want to know! Send my report here!</h2>
            </Col>
          </Row>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <Form className="settings-form">
                  <Row>
                    <Col md="6" sm="6">
                      <FormGroup>
                        <label>Name</label>
                        <Input
                          className="border-input"
                          placeholder="Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="6">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          className="border-input"
                          placeholder="Email"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8" sm="6">
                      <FormGroup>
                        <label>Phone</label>
                        <Input
                          className="border-input"
                          placeholder="Phone"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4" sm="6">
                      <FormGroup>
                        <label htmlFor="phone-select">Select</label>
                        <Input id="Phone-select" type="select">
                          <option>Mobile</option>
                          <option>Work</option>
                          <option>Email</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12" sm="12">
                      <Label style={{ marginRight: "5%" }}>
                        Preferred Contact Method
                      </Label>
                      <FormGroup check inline>
                        <Label check>
                          <Input defaultValue="" type="checkbox"></Input>
                          Email <span className="form-check-sign"></span>
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input defaultValue="" type="checkbox"></Input>
                          Phone <span className="form-check-sign"></span>
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input defaultValue="" type="checkbox"></Input>
                          Text <span className="form-check-sign"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12" sm="12">
                      <FormGroup>
                        <label htmlFor="apt-select">
                          Video chat used for prearranged appointments only
                        </label>
                        <Input id="apt-select" type="select">
                          <option>Zoom</option>
                          <option>Skype</option>
                          <option>WhatsApp</option>
                          <option>FaceTime</option>
                          <option>Google Duo</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Button color="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Settings;

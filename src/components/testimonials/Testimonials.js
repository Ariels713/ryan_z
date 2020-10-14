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
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components
const items = [
  {
    id: 1,
    content: (
      <CardBody>
        <h5 className="card-description">
          Ryan is very passionate and dedicated to his work. His top priority is
          to find you the best future home that meets all your needs and wants,
          I would highly recommend him to all my friends and family! He’s a
          pleasure to work with!!
        </h5>
        <CardFooter>
          <CardTitle tag="h4">Priya Kaur</CardTitle>
          <div className="card-stars">
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star" />
          </div>
        </CardFooter>
      </CardBody>
    ),
    altText: "",
    caption: "",
  },
  {
    id: 2,
    content: (
      <CardBody>
        <h5 className="card-description">
          Ryan was wonderful to work with! He’s very attentive, knowledgeable
          and so helpful. He was very familiar with the different neighborhood
          and the properties he showed us. Would recommend him to all my friends
          and family!
        </h5>
        <CardFooter>
          <CardTitle tag="h4">Daphne</CardTitle>
          <div className="card-stars">
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star" />
          </div>
        </CardFooter>
      </CardBody>
    ),
    altText: "",
    caption: "",
  },
  {
    id: 3,
    content: (
      <CardBody>
        <h5 className="card-description">
          "Ryan helped me and my husband find his parents the perfect home! They
          were moving from NYC to North Bergen, NJ to be closer to our family.
          He was great from start to finish, we were on a rushed timeline and he
          would go above and beyond to help the process get expedited. He
          referred us to our lawyer and inspector, all which were great. He knew
          what a big deal this was for my in-laws and made them feel
          comfortable, always keeping them updated and making sure they were
          being taken care of. They got the apartment they fell in love with -
          the one Ryan helped us find and close. We would recommend him to
          anyone looking for a new home!"{" "}
        </h5>
        <CardFooter>
          <CardTitle tag="h4">Lauren Chil</CardTitle>
          <div className="card-stars">
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star" />
          </div>
        </CardFooter>
      </CardBody>
    ),
    altText: "",
    caption: "",
  },
];

function SectionTestimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <>
      <div
        className="section section-testimonials cd-section section-gray"
        id="testimonials"
        style={{ padding: 0 }}
      >
        <div
          style={{ padding: "0 0 10px 0" }}
          className="testimonials-2 section section-testimonials section-gray"
        >
          <Row>
            <Col className="ml-auto mr-auto text-center " md="8">
              <h2 className="title">Client Testimonials</h2>
              <h5 className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h5>
            </Col>
          </Row>
          <Container>
            <Row>
              <Col className="mr-auto" md="2"></Col>
              <Col className="ml-auto mr-auto" md="6">
                <div className="page-carousel">
                  <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                  >
                    <CarouselIndicators
                      items={items}
                      activeIndex={activeIndex}
                      onClickHandler={goToIndex}
                    />
                    {items.map((item) => {
                      return (
                        <CarouselItem
                          onExiting={onExiting}
                          onExited={onExited}
                          key={item.id}
                        >
                          <Card className="card-testimonial card-plain">
                            {item.content}
                          </Card>
                        </CarouselItem>
                      );
                    })}
                    <a
                      className="left carousel-control carousel-control-prev"
                      data-slide="prev"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        previous();
                      }}
                      role="button"
                    >
                      <span className="fa fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="right carousel-control carousel-control-next"
                      data-slide="next"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        next();
                      }}
                      role="button"
                    >
                      <span className="fa fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </a>
                  </Carousel>
                </div>
              </Col>
              <Col className="ml-auto" md="2"></Col>
            </Row>
          </Container>
        </div>
        {/* ********* END TESTIMONIALS 2 ********* */}
      </div>
    </>
  );
}

export default SectionTestimonials;

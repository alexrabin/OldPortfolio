import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Divider from "../Divider";

export const TestimonialsSection = ({ theme, styles }) => {
  return (
    <div
      id="testimonials"
      className="mx-auto"
      style={{ width: "95%", marginTop: 50 }}
    >
      <div className="row justify-content-start align-items-center mb-4">
        <div className="col-sm-6 col-md-4 col-lg-4">
          <h1 className={`${styles.textColor}`}>Testimonials</h1>
        </div>
        <div className="col-sm-6 col-md-8 col-lg-8">
          <Divider styles={styles} />
        </div>
      </div>
      <Container>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4 justify-content-around">
          <Col>
            <Testimonial
              styles={styles}
              theme={theme}
              quote={
                "Fantastic developer and pleasure to work with. Highly recommend. Alex is a talented developer, adheres to strict deadlines. Certainly a great addition to any development (front or backend) team."
              }
              author="Evan Tousey"
            />
          </Col>
          <Col>
            <Testimonial
              styles={styles}
              theme={theme}
              quote={
                "Alex is awesome! He's very quick at finishing tasks, and can deliver exactly what you're looking for. I wish I had more tasks for him to do, and would totally get Alex to work on other tasks. He also started working on the task in advance, and finished way before my timeline. Props to him!"
              }
              author="Yannie Tan"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Testimonial = ({ theme, styles, quote, author }) => {
  return (
    <Card
      border={"secondary"}
      text={theme === "dark" ? "white" : "dark"}
      style={{ backgroundColor: `transparent` }}
    >
      <Card.Body>
        <Card.Text>"{quote}"</Card.Text>
        <Card.Subtitle>- {author}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

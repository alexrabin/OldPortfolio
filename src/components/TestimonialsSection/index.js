import React from "react";
import { Col, Row } from "react-bootstrap";
import Divider from "../Divider";
import { Testimonial } from "./Testimonial";
const TestimonialsSection = ({ theme, styles }) => {
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
      <Row xs={1} md={2} className="g-4 justify-content-around equal">
        <Col className="align-items-stretch d-flex">
          <Testimonial
            styles={styles}
            theme={theme}
            quote={
              "Fantastic developer and pleasure to work with. Highly recommend. Alex is a talented developer, adheres to strict deadlines. Certainly a great addition to any development (front or backend) team."
            }
            author="Evan Tousey"
          />
        </Col>
        <Col className="align-items-stretch d-flex">
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
    </div>
  );
};

export default TestimonialsSection;

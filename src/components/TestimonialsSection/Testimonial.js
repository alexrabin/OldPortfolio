import React from "react";
import { Card } from "react-bootstrap";
export const Testimonial = ({ theme, quote, author }) => {
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

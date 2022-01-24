import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button
} from "react-bootstrap";
import ChangingIcon from "./ChangingIcon";

export default function NavigationBar() {
  return <>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Container>
  <Navbar.Brand href="#home"><ChangingIcon width={32}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="navBar" />
    <Navbar.Collapse id="navBar" className="justify-content-end">
      <Nav
        className="text-center"
      >
        <Nav.Link href="#action1">About</Nav.Link>
        <Nav.Link href="#action2">Experience</Nav.Link>
        <Nav.Link href="#action3">Projects</Nav.Link>
        <Nav.Link href="#action4">Contact</Nav.Link>
        <Button className="w-25 mx-auto">Resume</Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  </>;
}

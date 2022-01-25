import React, {useState} from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form
} from "react-bootstrap";
import ChangingIcon from "./ChangingIcon";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { FaBars } from 'react-icons/fa';

export default function NavigationBar({theme, switchTheme}) {
  const [showNavList, setShowNavList] = useState(false);
  return <>
<Navbar collapseOnSelect expand="xl" bg={theme === "dark" ? "dark" : 'primary'} variant={theme === "dark" ? "dark" : 'light'} fixed="top">
  <Container fluid>
  <Navbar.Brand href="#home"><ChangingIcon width={32}/></Navbar.Brand>
    <div className={`justify-content-around d-flex align-items-center text-light`}>
    {/* {<BootstrapSwitchButton
        size="xs"
        onstyle="light"
        offstyle="outline-primary"
        width={100}
            checked={theme === "dark"}
            onlabel='Dark'
            offlabel='Light'
            onChange={(checked) => {
              switchTheme()
            }}
        />} */}
       
        <Nav.Link className={"text-light"} href="#action1">About</Nav.Link>
        <Nav.Link className={"text-light"} href="#action2">Experience</Nav.Link>
        <Nav.Link className={"text-light"} href="#action3">Projects</Nav.Link>
        <Nav.Link className={"text-light"}href="#action4">Contact</Nav.Link>
        <Button className="w-25 mx-auto" className={theme == "dark" ? "bg-primary" : "bg-dark"}>Resume</Button>
        <Form.Check 
        type="switch"
        className="mx-3"
        style={{width: 70}}
        checked={theme === "dark"}
          id="custom-switch"
          onChange={switchTheme}
          label={theme === "dark" ? "Dark": "Light"}
        />
    </div>
  </Container>
</Navbar>

  </>;
}

import React, {useState} from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  Offcanvas,
  CloseButton
} from "react-bootstrap";
import ChangingIcon from "../ChangingIcon";
import './styles.css';


export default function NavigationBar({theme, switchTheme, styles}) {
  const [showNavList, setShowNavList] = useState(false);
  return <>
<Navbar className="transparent" collapseOnSelect expand="xl"  sticky="top" expand={false}>
  <Container fluid>
  <Navbar.Brand href="#home"><ChangingIcon width={32}/></Navbar.Brand>
    <div className={`justify-content-around align-items-center ${styles.smallLinkStyle} d-none d-md-flex`}>
      
        <Nav.Link className={styles.smallLinkStyle} href="#about">About</Nav.Link>
        <Nav.Link className={styles.smallLinkStyle} href="#experience">Experience</Nav.Link>
        <Nav.Link className={styles.smallLinkStyle} href="#projects">Projects</Nav.Link>
        <Nav.Link className={styles.smallLinkStyle} href="#contact">Contact</Nav.Link>
        <Button className="w-25 mx-auto">Resume</Button>
        <Form.Check 
        type="switch"
        className="mx-3"
        style={{width: 100, marginTop: 6}}
        checked={theme === "dark"}
          id="custom-switch"
          onChange={switchTheme}
          label={theme === "dark" ? "Dark": "Light"}
        />
        
    </div>
    <div className="d-sm-inline d-md-none ">
    <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setShowNavList(true)}/>
    </div>
    <Navbar.Offcanvas
    style={{transition: "all .5s ease",
    WebkitTransition: "all .5s ease",
    MozTransition: "all .5s ease"}}
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      className={styles.bgColor}
      show={showNavList}
    onHide={() => setShowNavList(false)}
    >
      <Offcanvas.Header>
        <Form.Check 
            type="switch"
            className="mx-3"
            className={styles.medLinkStyle}
            style={{width: 70, marginTop: 6}}
            checked={theme === "dark"}
              id="custom-switch"
              onChange={switchTheme}
              label={theme === "dark" ? "Dark": "Light"}
          /> 
          <CloseButton variant={theme === "dark" ? "white" : 'dark'} onClick={() => setShowNavList(false)}/>
        </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-center d-flex align-items-center">
          
          <Nav.Link className={styles.medLinkStyle} href="#about">About</Nav.Link>
          <Nav.Link className={styles.medLinkStyle} href="#experience">Experience</Nav.Link>
          <Nav.Link className={styles.medLinkStyle} href="#projects">Projects</Nav.Link>
          <Nav.Link className={styles.medLinkStyle} href="#contact">Contact</Nav.Link>
          <Button className="w-50 med-text">Resume</Button>
          
        </Nav>
        
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>

  </>;
}

import React, {useState} from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  Offcanvas,
  CloseButton,
  Col
} from "react-bootstrap";
import './styles.css';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/largeicon.png'
//${theme == 'dark' ? 'dark' : 'light'}
export default function NavigationBar({theme, switchTheme, styles}) {
  const [showNavList, setShowNavList] = useState(false);
  return <>
<div className={`navbar navbar-expanded-xl navbar-inner transparent `}>
  <Container fluid>
  <Navbar.Brand href="#home"><img src={logo} height={32}/></Navbar.Brand>
    <div className={`justify-content-around align-items-center ${styles.smallLinkStyle} d-none d-md-flex`}>
      
        <Nav.Link className={styles.smallLinkStyle} href="#about">About</Nav.Link>
        <Nav.Link className={styles.smallLinkStyle} href="#experience">Experience</Nav.Link>
        <Nav.Link className={styles.smallLinkStyle} href="#projects">Projects</Nav.Link>
        <Nav.Link className={styles.smallLinkStyle} href="#contact">Contact</Nav.Link>
        <Button className="w-25 mx-auto resume-button">Resume</Button>
       <div className="switch-container">
       <Form.Check 
        type="switch"
        className={`mx-3 ${theme === "dark" ? "dark-nav-link": "light-nav-link"}`}
        style={{width: 100, marginTop: 7}}
        checked={theme === "dark"}
          id="custom-switch"
          onChange={switchTheme}
          label={theme === "dark" ? "Dark": "Light"}
        />
       </div>
        
    </div>
    <div className="d-sm-inline d-md-none ">
    <Navbar.Toggle className={`${theme === "dark" ? "text-white": "text-dark"}`} aria-controls="offcanvasNavbar" onClick={() => setShowNavList(true)}>
    <FaBars/>

        </Navbar.Toggle>
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
      <div className="switch-container">
        <Form.Check 
            type="switch"
            className={[styles.medLinkStyle, "mx-3"]}
            style={{width: 70, marginTop: 6}}
            checked={theme === "dark"}
              id="custom-switch"
              onChange={switchTheme}
              label={theme === "dark" ? "Dark": "Light"}
          /> 
        </div>
          <CloseButton variant={theme === "dark" ? "white" : null} onClick={() => setShowNavList(false)}/>
        </Offcanvas.Header>
      <Offcanvas.Body>
        <Col className="justify-content-center align-items-center text-center">
          
          <Nav.Link className={styles.medLinkStyle} href="#about">About</Nav.Link>
          <Nav.Link className={styles.medLinkStyle} href="#experience">Experience</Nav.Link>
          <Nav.Link className={styles.medLinkStyle} href="#projects">Projects</Nav.Link>
          <Nav.Link className={styles.medLinkStyle} href="#contact">Contact</Nav.Link>
          <Button className="w-50 med-text resume-button">Resume</Button>
          
        </Col>
        
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</div>

  </>;
}

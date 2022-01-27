import React from 'react';
import Divider from '../Divider';
import { Tabs, Tab, Nav, Row, Col } from 'react-bootstrap';

export default function AboutSection({theme, styles}) {
  return <div className='mx-auto' style={{width:"95%", marginTop:50}}>
    <div className="row justify-content-start align-items-center">
      <div className="col-sm-6 col-md-4">
        <h1 className={`${styles.textColor}`}>About Me</h1>
      </div>
      <div className="col-sm-6 col-md-8">
        <Divider styles={styles}/>
      </div>
    </div>
    <div id='aboutText'>
      <p className={`${styles.textColor}`}>
        Hi! My name is Alex and I enjoy creating helpful tools and apps for everyone to take advantage of.
      </p>
      <p className={`${styles.textColor}`}>
       My programming journey started back in 2015 when a high school friend taught me the basics of iOS development using the programming language, Objective-C. Ever since then, I've been addicted to the thrill of solving problems for the digital world. 
      </p>
      <p className={`${styles.textColor}`}>
      Fast forward to today, and I've had the privilege of working at two starts ups, interning at a financial corporation, and desiging websites for the little guy.
      </p>
    </div>
    <div id='techStack' className='mb-5'>
    <p className={`${styles.textColor}`}>
        Here are some technologies I've been working with:
      </p>
      <Tab.Container id="techStackContainer" defaultActiveKey="mobile">
  <Row>
    <Col sm={3} className='mb-3'>
      <Nav variant="pills" className="flex-column text-center">
        <Nav.Item>
          <Nav.Link eventKey="mobile">Mobile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="web">Web</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="other">Other</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="mobile" className={`${styles.textColor}`}>
            <li>Swift</li>
            <li>Objective-C</li>
            <li>Java</li>
            <li>Flutter/Dart</li>
            <li>React Native</li>
        </Tab.Pane>
        <Tab.Pane eventKey="web" className={`${styles.textColor}`}>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Angular</li>
            <li>Bootstrap</li>
        </Tab.Pane>
        <Tab.Pane eventKey="other" className={`${styles.textColor}`}>
            <li>Python</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Firebase</li>
            <li>MongoDB</li>
            <li>MySQL</li>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
   
    </div>
  </div>;
}

import React from 'react';
import Divider from '../Divider';
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import '../../styles/pills.css';

export default function AboutSection({theme, styles}) {
  return <div id='about' className='mx-auto' style={{width:"95%", marginTop:50}}>
    <div className="row justify-content-start align-items-center mb-4">
      <div className="col-sm-6 col-md-4 col-lg-2">
        <h1 className={`${styles.textColor}`}>About Me</h1>
      </div>
      <div className="col-sm-6 col-md-8 col-lg-10">
        <Divider styles={styles}/>
      </div>
    </div>
    <div id='aboutText'>
      <p className={`${styles.textColor} mono-font`}>
        Hi! I'm Alex and I love creating helpful tools and apps for everyone to enjoy.
      </p>
      <p className={`${styles.textColor} mono-font`}>
       My programming journey began in 2015, when a high school friend taught me the basics of iOS development. Ever since then, I've been addicted to the thrill of solving problems for the digital world. 
      </p>
      <p className={`${styles.textColor} mono-font`}>
      Fast forward to today, and I've had the privilege of working at two starts ups, interning at a financial corporation, and designing websites for the little guy.
      </p>
    </div>
    <div id='techStack' className='mb-5'>
    <p className={`${styles.textColor}`}>
        Here are some technologies I've been working with:
      </p>
      <Tab.Container id="techStackContainer" defaultActiveKey="mobile">
  <Row>
    <Col sm={3} className='mb-3'>
      <Nav variant="pills" className="flex-column text-left">
        <Nav.Item>
          <Nav.Link eventKey="mobile" className={theme === 'dark' ? 'dark' : 'light'}>Mobile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="web" className={theme === 'dark' ? 'dark' : 'light'}>Web</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="other" className={theme === 'dark' ? 'dark' : 'light'}>Other</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content className='mono-font' >
        <Tab.Pane eventKey="mobile" className={`${styles.textColor}`}>

            <Row className='justify-content-center'>
                <Col className='justify-content-center d-flex'>
                    <div>
                        <li>Swift</li>
                        <li>Objective-C</li>
                        <li>Java</li>
                    </div>
                </Col>
                <Col className='justify-content-center d-flex'>
                    <div>
                    <li>Flutter/Dart</li>
                     <li>React Native</li>
                    </div>
                </Col>
            </Row>
            
        </Tab.Pane>
        <Tab.Pane eventKey="web" className={`${styles.textColor}`}>
            <Row className='justify-content-center'>
            <Col className='justify-content-center d-flex'>
                <div>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>jQuery</li>
                </div>
            </Col>
           
            <Col className='justify-content-center d-flex'>
                <div>
            <li>React</li>
            <li>Angular</li>
            <li>Bootstrap</li>
            </div>
            </Col>
            </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="other" className={`${styles.textColor}`}>
           
            
            <Row className='justify-content-center'>
            <Col className='justify-content-center d-flex'>
                <div>
                <li>Python</li>
            <li>Node.js</li>
            <li>Express</li>
                </div>
            </Col>
           
            <Col className='justify-content-center d-flex'>
                <div>
                <li>Firebase</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            </div>
            </Col>
            </Row>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
   
    </div>
  </div>;
}

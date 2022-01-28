import React from 'react';
import Divider from '../Divider';
import '../../styles/pills.css';
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import WorkSection from './WorkSection';

export default function Experience({theme, styles}) {
  return <div id='experience' className='mx-auto' style={{width:"95%", marginTop:50}}>
    <div className="row justify-content-start align-items-center mb-4">
        <div className="col-md-6 col-lg-4">
            <h1 className={`${styles.textColor}`}>Where I've Worked</h1>
        </div>
        <div className="col-md-6 col-lg-8">
            <Divider styles={styles}/>
        </div>
    </div>
    <Tab.Container id="work-container" defaultActiveKey="harkins">
  <Row>
  <Col sm={4} className='mb-3'>
      <Nav variant="pills" className="flex-column text-sm-left text-md-center">
        <Nav.Item>
          <Nav.Link eventKey="harkins" className={theme === 'dark' ? 'dark' : 'light'}>Harkins Theatres</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="amerprise" className={theme === 'dark' ? 'dark' : 'light'}>Amerprise Financial</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="parrotreports" className={theme === 'dark' ? 'dark' : 'light'}>Parrot Reports</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="persokey" className={theme === 'dark' ? 'dark' : 'light'}>PersoKey</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={8} className='mb-3' >
      <Tab.Content>
        <Tab.Pane eventKey="harkins" className={`${styles.textColor}`}>

            <WorkSection title={'React Developer'} work={"Harkins Theatres"} workLink={"https://www.harkins.com"} dates={"December 2021 - Present"}>
            
            </WorkSection>
            
            
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
  </div>;
}

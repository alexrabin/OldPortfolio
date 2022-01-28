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
      <Nav variant="pills" className="flex-column text-left">
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
              <li>Write modern, beautiful, amd maintainable for several internal projects</li>
              <li>Work with a variety of different languages, platforms, and frameworks such as JavaScript, TypeScript, React, React Native, Bootstrap, and Chakra UI </li>
              <li>Communicate with a team of developers, business system analysts, and project managers on a daily basis</li>
            </WorkSection>
            
            
        </Tab.Pane>
        <Tab.Pane eventKey="amerprise" className={`${styles.textColor}`}>
        <WorkSection title={'Technology Intern'} work={"Amerprise Financial"} workLink={"https://www.ameriprise.com"} dates={"May 2020 - August 2020"}>
              <li>Worked on a small team to build a dashboard website to show all customer's financial transactions</li>
              <li>Programmed in JavaScript, React, and Python </li>
            </WorkSection>
        </Tab.Pane>
        <Tab.Pane eventKey="parrotreports" className={`${styles.textColor}`}>
           
            
        <WorkSection title={'Head Full Stack Developer'} work={"Parrot Reports"} workLink={"https://www.linkedin.com/company/parrot-reports/about/"} dates={"July 2019 - January 2020"}>
              <li>Made an app allowing veterinarians to make audiovisual reports for their clients</li>
              <li>Created and maintained the mobile app, website, and server</li>
              <li>The Full Stack: Flutter, Angular, and Firebase</li>
            </WorkSection>
        </Tab.Pane>
        <Tab.Pane eventKey="persokey" className={`${styles.textColor}`}>
           
            
           <WorkSection title={'Junior Mobile Developer'} work={"Persokey"} workLink={"https://www.linkedin.com/company/persokey/about/"} dates={"Novemeber 2016 - August 2017"}>
                 <li>Worked closely with the CTO to design and implement a personal identification platform</li>
                 <li>Created multiple iOS apps connecting to AWS Lambda</li>
               </WorkSection>
           </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
  </div>;
}

import React from 'react';
import { Button } from 'react-bootstrap';

export default function ContactSection({styles}) {
  return <div id='contact' className='mx-auto' style={{width:"95%", marginTop:50}}>
        <h1 className={`text-center ${styles.textColor}`}>Get In Touch</h1>
        <p style={{color: styles.accentTextColor, textAlign:'center'}}>Although I'm not currently looking for any new opportunities, my inbox is always open. </p>
        <div className='text-center'>
        <Button className="regular-button" href="mailto:alex.m.rabin101@gmail.com" size='lg'>Message Me</Button>
        </div>
  </div>;
}

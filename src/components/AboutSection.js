import React from 'react';
import { Card } from 'react-bootstrap';

export default function AboutSection({theme, styles}) {
  return <div className='mx-auto' style={{width:"95%", marginTop:100}}>
      <p className={`text-pink mono-font`}>
          Hello there, my name is
      </p>
      <h1 className={`${styles.textColor} big-header`}>Alex Rabin.</h1>
      <h1 className={`headline`} style={{color: styles.accentTextColor}}>Maker of apps and websites.</h1>

  </div>;
}

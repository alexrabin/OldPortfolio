import React from 'react';

export default function AboutSection({theme, styles}) {
  return <div className='mx-auto' style={{width:"95%", marginTop:50}}>
    <h1 className={`${styles.textColor}`}>About Me</h1>
  </div>;
}

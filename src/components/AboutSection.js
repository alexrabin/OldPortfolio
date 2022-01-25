import React from 'react';
import { Card } from 'react-bootstrap';

export default function AboutSection({theme, styles}) {
  return <div className='mx-auto w-75'>
      <p className={`text-pink mono-font pt-5`}>
          Hello there, my name is
      </p>
      <h1 className={`${styles.textColor} big-header`}>Alex Rabin.</h1>
  </div>;
}

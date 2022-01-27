import React from 'react';

export default function HeaderSection({theme, styles}) {
  return <div className='mx-auto' style={{width:"95%", marginTop:100, marginBottom: 50}}>
      <p className={`text-pink mono-font`}>
          Hello there, my name is
      </p>
      <h1 className={`${styles.textColor} big-header`}>Alex Rabin.</h1>
      <h1 className={`headline`} style={{color: styles.accentTextColor}}>Cool stuff technology expert</h1>
      <p className={`${styles.textColor}`}>I'm a software developer specializing in mobile and web development. Currently, I'm focused on perfecting <a href="https://www.harkins.com" target="_blank" style={{color: 'var(--bs-pink', textDecoration:'none', zIndex:99999}}>Harkins Theatres'</a> mobile app and website. </p>

  </div>;
}

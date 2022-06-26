import React from 'react';
import { FaGithub, FaLinkedinIn, FaStackOverflow } from 'react-icons/fa';

export default function HeaderSection({theme, styles}) {
  return <div id="home" className='mx-auto' style={{width:"95%", marginTop:100, marginBottom: 50}}>
      <p className={`text-pink mono-font`}>
          Hello there, my name is
      </p>
      <h1 className={`${styles.textColor} big-header`}>Alex Rabin.</h1>
      <h1 className={`headline`} style={{color: styles.accentTextColor}}>Cool stuff technology expert</h1>
      <p className={`${styles.textColor} mono-font`}>I'm a software developer specializing in frontend development. Currently, I'm focused on perfecting <a href="https://www.harkins.com" target="_blank" className='ext-link' rel="noreferrer">Harkins Theatres'</a> mobile app and website. </p>
      <div className='row d-flex justify-content-start text-pink gx-4'>
        <a className='col-auto ext-link' href='https://github.com/alexrabin' target="_blank" rel="noreferrer"> <FaGithub size={30}/></a>
        <a className='col-auto ext-link' href='https://stackoverflow.com/users/6127000/alex-rabin' target="_blank" rel="noreferrer"> <FaStackOverflow size={30}/></a>
        <a className='col-auto ext-link' href='https://www.linkedin.com/in/alexanderrabin/' target="_blank" rel="noreferrer"> <FaLinkedinIn size={30}/></a>

      </div>
  </div>;
}

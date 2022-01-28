import React from 'react';

export default function WorkSection(props) {
    const {title, work, workLink, dates} = props;
  return <div>
        <h4>{title} <a href={workLink} target="_blank" className='ext-link'>@ {work}</a></h4>
        <p className='mono-font mb-1'>{dates}</p>
        {props.children}
  </div>;
}

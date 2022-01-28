import React from 'react';

export default function WorkSection(props) {
    const {theme, styles, title, work, workLink, dates} = props;
  return <div>
        <h4>{title}<a href={workLink} className='ext-link'>@ {work}</a></h4>
        <small className='mono-font'>{dates}</small>
      {props.children}
  </div>;
}

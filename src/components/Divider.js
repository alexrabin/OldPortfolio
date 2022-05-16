import React from 'react';
export default function Divider({styles, height}) {
  return <hr style={{color: styles.accentTextColor, height: height}}/>
  ;
}
Divider.defaultProps ={
  height: "3px"
}
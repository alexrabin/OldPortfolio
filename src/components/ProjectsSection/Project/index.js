import React from 'react';
import { Row, Col} from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import Divider from '../../Divider';
export default function Project(props) {
    const {title,imageLink, projectLink, codeLink, styles, left, imageIcon} = props;
  return <div>
    <Row className={`flex-row-${!left && 'reverse'}`}>
        <Col className='col-auto mb-3'>
            <a href={projectLink || codeLink} target="_blank">{imageLink ? <img height={100} alt={title} src={imageLink}/>: imageIcon}</a>
        </Col>
        <Col className={``}>
            <div className={`d-flex ${left ? 'justify-content-start' : 'justify-content-end'}`}>
            <a className={`ext-link`} href={codeLink || projectLink} target="_blank"><h4 className={`${styles.textColor} ${!left && 'text-end'} fw-bold`}>{title}</h4></a>  
            {codeLink && <a className={`ext-link`} href={codeLink}><FaGithub style={{color: styles.accentTextColor}} className="mx-2 "size={25}/></a>}  
            
            </div>  
            {props.children}
        </Col>
    </Row>
    <Divider styles={styles}/>
 </div>;
}

import React from 'react';
import { Row, Col} from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import Divider from '../../Divider';
export default function Project(props) {
    const {title,imageLink, projectLink, codeLink, styles, left} = props;
  return <div>
    <Row className={`flex-md-row-${!left && 'reverse'}`}>
        <Col className='col-auto mb-3'>
            <a href={projectLink || codeLink} target="_blank"><img height={100} alt={title} src={imageLink}/></a>
        </Col>
        <Col className={``}>
            <a className={`ext-link`} href={codeLink || projectLink} target="_blank"><h4 className={`${styles.textColor} ${!left && 'text-end'} fw-bold`}>{title}{codeLink && <a className={`ext-link`}><FaGithub style={{color: styles.accentTextColor}} className="mx-2 "size={25}/></a>}</h4></a>      
            {props.children}
        </Col>
    </Row>
    <Divider styles={styles}/>
 </div>;
}

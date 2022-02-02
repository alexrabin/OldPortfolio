import React from 'react';
import Divider from '../Divider';
import Project from './Project';
import letsdothisicon from '../../assets/letsdothisicon.png'
import dragazon from '../../assets/dragazon.png'
import blockrun from '../../assets/blockRunIcon.png'
import { FaLock } from 'react-icons/fa';
export default function ProjectsSection({theme, styles}) {
  return <div id='projects' className='mx-auto' style={{width:"95%", marginTop:50}}>
    <div className="row justify-content-start align-items-center mb-4">
        <div className="col-md-7 col-lg-5">
            <h1 className={`${styles.textColor}`}>Some Things I've Built</h1>
        </div>
        <div className="col-md-5 col-lg-7">
            <Divider styles={styles}/>
        </div>
    </div>
    <div id='the-projects'>
        <Project left styles={styles} title={"native_drag_n_drop"} codeLink={"https://github.com/alexrabin/FlutterNativeDragAndDrop"} projectLink="https://pub.dev/packages/native_drag_n_drop" imageLink="https://user-images.githubusercontent.com/15949910/150895221-6a4e58f8-4238-43e6-8549-4e626389985b.png">
            <p style={{color: styles.accentTextColor}} className='mono-font'>A package that allows developers to add native drag and drop support into their Flutter app.</p>

        </Project>
        <Project left={false} styles={styles} title={"Dragazon"} codeLink={"https://github.com/alexrabin/dragazon/tree/testing"} projectLink="https://dragazon.herokuapp.com" imageLink={dragazon} >
            <p className='text-end' style={{color: styles.accentTextColor}} className='mono-font'>A store for all your dragon related needs! Dragazon is a MERN e-commerce application created by Lonnie Mitchell, Chris Garrison, and I. </p>

        </Project>
        <Project left styles={styles} title={"Password Generator"} codeLink={"https://github.com/alexrabin/password-generator"} projectLink="https://alexrabin.github.io/password-generator/" imageIcon={<FaLock size={80}/>} >
            <p style={{color: styles.accentTextColor}} className='mono-font'>A password generator built with React and Bootstrap. </p>

        </Project>
        <Project left={false} styles={styles} title={"Let's Do This"} imageLink={letsdothisicon}>
            <p className='text-end' style={{color: styles.accentTextColor}} className='mono-font'>Back in 2015, my friend, Jacob and I created our first iOS app called Let's Do This. The app was a car rampage game, where the user would have to dodge incoming cars and shoot those cars to stay alive. The user could collect coins and then save up those coins to buy different types of cars.</p>
        </Project>
        <Project left styles={styles} title={"Block Run"} imageLink={blockrun}>
            <p style={{color: styles.accentTextColor}} className='mono-font'>Block Run was the second iOS app that Jacob and I made. The app was a game where the user tapped on the screen to jump over obstacles. The user gained points by jumping over as many obstacles as possible. </p>

        </Project>
    </div>
  </div>;
}

import React, {useState} from 'react';
import {CrazyFaceIcon, NerdFaceIcon, CoolFaceIcon, WinkFaceIcon, SillyFaceIcon, ThinkingFaceIcon, SmirkFaceIcon, DevilFaceIcon} from '../icons';
import SquintTongueFaceIcon from '../icons/SquintTongueFaceIcon';

const icons = [<CoolFaceIcon/>,<CrazyFaceIcon/>, <NerdFaceIcon/>,  <WinkFaceIcon/>, <SillyFaceIcon/>, <ThinkingFaceIcon/>, <SmirkFaceIcon/>, <SquintTongueFaceIcon/>, <DevilFaceIcon/>];

export default function ChangingIcon({width}) {
    const [currentIcon, setCurrentIcon] = useState(0);

    const getNewIcon = () => {
        let randNum = getRandNumber();
        while (randNum === currentIcon){
            randNum = getRandNumber()
        }
        setCurrentIcon(randNum)
    };

    return <div style={{width: width}} onMouseEnter={getNewIcon}>
    {icons[currentIcon]}
    </div>;
}
const getRandNumber = () => {
    return Math.floor(Math.random() * icons.length);
}
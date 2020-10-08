import React from 'react';

import WalkOne from './walkOne';
import WalkTwo from './walkTwo';
import DragonOne from './dragon';
import DragonTwo from './dragonTwo';
import GirlOne from './girlOne';
import GirlTwo from './girlTwo';
import PikchuFun from './pikachu';

function Background () {
    return (
        <div className='background'>
           
             <DragonTwo />
            <DragonOne/>
            <WalkOne />
            <WalkTwo />
           <PikchuFun />
            <GirlOne />
            <GirlTwo />
        </div>
    )
}

export default Background;
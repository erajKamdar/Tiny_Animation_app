import React from 'react';
import Webanimation from '@wellyshen/use-web-animations';
import Dragon from '../images/dragon.gif'
function DragonOne () {

    const DragonOne = Webanimation ({
        keyframes:[
            {transform:'translateX(50%)'},
            {transform:'translateX(-50%)'},
        ],
        timing:{
            duration: 7500,
            iterations: Infinity
        }
    })

    return (
        <div ref={DragonOne.ref}>
            <img src={Dragon} alt='dargonOne'  className='dragonOne'></img>
        </div>
    )
}
export default DragonOne;
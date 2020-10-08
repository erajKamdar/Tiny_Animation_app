import React from 'react';
import Webanimation from '@wellyshen/use-web-animations';
import Dragon from '../images/dragon_2.gif'
function DragonTwo () {

    const DragonTwo = Webanimation({
        keyframes:[
            {transform:'translateX(50%)'},
            {transform:'translateX(-50%)'},
        ],
        timing: {
            duration: 8000,
            iterations: Infinity,
        }
    })

    return (
        <div ref={DragonTwo.ref}>
            <img alt='dargonTwo'src={Dragon}  className='dragonTwo'></img>
        </div>
    )
}
export default DragonTwo;
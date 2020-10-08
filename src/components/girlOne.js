import React from 'react';
import Webanimation from '@wellyshen/use-web-animations';
import Girl from '../images/girl.gif'
function GirlOne () {

    const GirlOne = Webanimation({
        keyframes: [
            { transform: 'translate(-100%, 30%)'}
        ],
        timing: {
            duration: 10000,
            iterations: Infinity,
        }
    })

    return (
        <div  ref={GirlOne.ref}>
            <img alt='girlOne' src={Girl} className='girlOne'></img>
        </div>
    )
}
export default GirlOne;
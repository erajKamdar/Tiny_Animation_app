import React from 'react';
import Webanimation from '@wellyshen/use-web-animations';
import WALK from '../images/walk_2.gif'
function WalkTwo () {

    const walkTwo = Webanimation({
        keyframes: [
            { transform: 'translateY(90%)'},
        ],
        timing: {
            duration: 5000,
            iterations: Infinity,
        }
    })

    return (
        <div ref={walkTwo.ref}>
            <img  alt='WalkTwo' src={WALK} className='walkTwo'></img>
        </div>
    )
}
export default WalkTwo;
import React from 'react';
import Webanimation from '@wellyshen/use-web-animations';
import WALK from '../images/walk_1.gif'
function WalkOne () {

    const walkOne = Webanimation({
        keyframes: [
            { transform: 'translateY(80%)'},
        ],
        timing: {
            duration: 5000,
            iterations: Infinity,
        }
    })

    return (
        <div ref={walkOne.ref}>
            <img alt='WalkOne' src={WALK} className='walkOne'></img>
        </div>
    )
}
export default WalkOne;
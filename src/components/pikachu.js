import React from 'react';
import Webanimation from '@wellyshen/use-web-animations';
import Pic from '../images/pikachu1.gif'
function PikachuFun () {

    const Pikachu = Webanimation({
        keyframes: [
            { transform: 'translate(100%, 100%)'}
        ],
        timing: {
            duration: 6000,
            iterations: Infinity,
        }
    })

    return (
        <div  ref={Pikachu.ref}>
            <img alt='pikachu' src={Pic} className='pikachu'></img>
        </div>
    )
}
export default PikachuFun;
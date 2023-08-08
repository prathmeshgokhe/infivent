import React from 'react'

import "../styles/hero.scss"
import { MouseParallax } from "react-just-parallax";
import coverimg from "../images/Coverimg.png";
const Hero = () => {
    return (
        <div className='hero'>
            
            <MouseParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.2}>
                <div className="bg-container" />
            </MouseParallax>
            {/* <div className='logo'>
                <img src={}
                    height="20"
                    width="40"

                />
                <h1>infivent</h1>
            </div> */}
            <div className='content'>
                <div className='text'>
                    <h1>
                        Streamline, connect & elevate b2b events & expos!
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in mollis nunc sed id semper risus in.</p>
                    <div className="signup-btn">
                        <button>Get Started</button>
                    </div>
                </div>
                <div className='image'>
                    <img
                        src={coverimg}
                     
                    />

                </div>

            </div>
        </div>
    )
}

export default Hero
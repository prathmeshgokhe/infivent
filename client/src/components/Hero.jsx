import React from 'react'
import { HashLink } from 'react-router-hash-link';
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
                    <div className='heading'>
                        <h1>
                            Discover, Connect, Elevate.
                        </h1>
                        <h3>Your Gateway to B2B Expos</h3>
                    </div>
                    <p>Welcome to Infivents, where the world of B2B events and expos comes alive! We are your ultimate platform for connecting and elevating business events on a global scale. Whether you're an event organizer, exhibitor, or attendee, we've got you covered. Discover a world of opportunities as we bring together industry leaders, innovators, and decision-makers all in one place.</p>
                    <div className="signup-btn">
                        <HashLink to='#Contact'><button>Get Started</button></HashLink>
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
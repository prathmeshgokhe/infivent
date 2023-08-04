import React from 'react'
import img1 from "../images/Infinity.png"
import "../styles/hero.scss"

const Hero = () => {
    return (
        <div className='hero'>
            <div className='logo'>
                <img src={img1}
                    height="20"
                    width="40"

                />
                <h1>infivent</h1>
            </div>
            <div className='content'>
                <div className='text'>
                    <h1>
                        Streamline, connect & elevate b2b events & expos!
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in mollis nunc sed id semper risus in.</p>
                </div>
                <div className='image'>World</div>
            </div>
        </div>
    )
}

export default Hero
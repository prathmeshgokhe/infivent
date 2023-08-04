import React from 'react'
import "../styles/visionmission.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Visionmission = () => {
     useEffect(() => {
    AOS.init()


  }, [])


    return (
        <div className='main'>
            <div className='content'>
                <div className='vision-info'>
                    <div className='vision-container' data-aos="fade-right"
        data-aos-delay="50">
                        <div className='heading'>
                             <span>|</span>
                            <h1>Vision</h1>
                        </div>
                        <div className='info'>
                            <p>
                                At Infivent, our vision is to be the leading global provider of innovative Event Management SaaS solutions that empower businesses to create exceptional and memorable event experiences. We strive to revolutionize the event management industry by delivering cutting-edge technology, seamless connectivity, and unparalleled customer experiences, making us the go-to platform for event organizers worldwide.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mission-info' data-aos="fade-left"
        data-aos-delay="50">
                    <div className='mission-container'>
                        <div className='heading'>
                              <span>|</span>
                            <h1>Mission</h1>
                        </div>
                        <div className='info'>
                            <p>
                                Our mission at Infivent is to streamline, elevate, and connect B2B events and expos through our state-of-the-art Event Management SaaS platform. By leveraging advanced AI-driven technology, dynamic features, and real-time analytics, we aim to simplify event planning, enhance networking opportunities, and ensure successful outcomes for our clients. We are committed to continuous innovation, exceptional service, and delivering measurable value to our customers in every event they host.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visionmission
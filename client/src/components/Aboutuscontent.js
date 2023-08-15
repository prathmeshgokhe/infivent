import React from 'react'
import "../styles/aboutuscontent.scss";
import { MouseParallax } from "react-just-parallax";
import Bhanu from "../images/bhanu.jpg";
import rama from "../images/rama.jpg";
import Neerja from "../images/neerja.jpg";
import divya from "../images/divya.jpg";
import PowerFeature from "../components/PowerFeature"
import Visionmission from '../components/Visionmission';
import Sachin from "../images/sachin.jpg";
import priti from "../images/priti.jpg";


const Aboutuscontent = () => {
    return (
        <div className="about-us">
            <MouseParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.2}>
                <div className="bg-container" />
            </MouseParallax>

            <div className="fetaures-title">
                <h2 id='about-procohat'>About Us</h2>
            </div>

            <div className="proco-info">
                <p>With a promise to deliver tech that helps our clients to drive business and growth, we at ProCohat Technologies are your trusted Technological Solutions and Products Partners. By combining our deep technical expertise and industry experience, we strive to offer digital solutions and tailor made SAAS products for businesses. We believe in equipping our clients with the answers for what’s next in Tech, beforehand. Our proven solutions offer a unique competitive advantage for our clients and empower them to envision beyond.</p>
            </div>
            {/* <Visionmission /> */}
            <div className="fetaures-title">
                <h2 id='about-procohat'>Our Feature</h2>
            </div>
            <PowerFeature />
            {/* <div className="grid-team">
                <div className="card">
                    <div className="icon-container">
                        <div className="img-container">
                            <img src={Bhanu} alt="" />
                        </div>
                    </div>
                    <h3>Bhanu Rajagopalan</h3>
                    <p>Founder, Metaphors Inc. <br /> Director, Orangebeak Technologies Pvt. Ltd.<br />Serial Entrepreneur <br />25 Years in Branding and Advertising <br />6+ Years in Event Expo Space ​</p>
                </div>
                <div className="card">
                    <div className="icon-container">
                        <div className="img-container">
                            <img src={rama} alt="" />
                        </div>
                    </div>
                    <h3>R. Ramakrishnan</h3>
                    <p>5 x Entrepreneur | Investor & Mentor | Evangelist  <br />Co-founder & Member aXYKno Capital <br /> Co-Resource, Globalscope, Eartha & Mackintosh <br /> Global Partners | Past President TiE Nagpur <br /> Advisor Vigyan Bharti</p>
                </div>
                <div className="card">
                    <div className="icon-container">
                        <div className="img-container">
                            <img src={Neerja} alt="" />
                        </div>
                    </div>
                    <h3>Neerja Pathania</h3>
                    <p>Founder, Innovations Solutions and Events <br /> Serial Entrepreneur, Social Worker
                        <br />
                        25 Years of Experience in Events Space <br />Government IT Infra Projects and Services​</p>
                </div>
                <div className="card">
                    <div className="icon-container">
                        <div className="img-container">
                            <img src={divya} alt="" />
                        </div>
                    </div>
                    <h3>Divya Arora</h3>
                    <p>Ex National Director<br /> AFS Intercultural Programs, India <br />25 years across various schools, not for profit <br /> organizations, hospitals, businesses and export houses​</p>
                </div>
                <div className="card">
                    <div className="icon-container">
                        <div className="img-container">
                            <img src={Sachin} alt="" />
                        </div>
                    </div>
                    <h3>Sachin Ramchandani</h3>
                    <p>Founder, World of Wealth <br />5+ Years in Events

                        <br /> FinTech | Artificial Intelligence <br />Innovation | Startup Enthusiast <br /> Business Architecture | Advisor | Patents |​</p>
                </div>
                <div className="card">
                    <div className="icon-container">
                        <div className="img-container">
                            <img src={priti} alt="" />
                        </div>
                    </div>
                    <h3>Priti Ramakrishnan</h3>
                    <p>CEO, Immverse AIEx Patni Computers, IBM, IIM Indore <br />Cost Accountant, Private Equity, M&A <br />15+ Years of Experience in Tech</p>
                </div>

            </div> */}
            <div className="fetaures-title">
                <h2 id='mentor'>Our Metntor's</h2>

            </div>
            <div className="grid-container">
                <div className="card">
                    <div className="icon-container">
                        <div className="img-container">
                            <img src={Bhanu} alt="" />
                        </div>
                    </div>
                    <h3>Bhanu Rajagopalan</h3>
                    <p>Founder, Metaphors Inc. <br /> Director, Orangebeak Technologies Pvt. Ltd.<br />Serial Entrepreneur <br />25 Years in Branding and Advertising <br />6+ Years in Event Expo Space ​</p>
                </div>
                <div className="card">
                    <div className="icon-container">
                        <div className="img-container">
                            <img src={rama} alt="" />
                        </div>
                    </div>
                    <h3>R. Ramakrishnan</h3>
                    <p>5 x Entrepreneur | Investor & Mentor | Evangelist  <br />Co-founder & Member aXYKno Capital <br /> Co-Resource, Globalscope, Eartha & Mackintosh <br /> Global Partners | Past President TiE Nagpur <br /> Advisor Vigyan Bharti</p>
                </div>
                <div className="card">
                    <div className="icon-container">
                        <div className="img-container">
                            <img src={Neerja} alt="" />
                        </div>
                    </div>
                    <h3>Neerja Pathania</h3>
                    <p>Founder, Innovations Solutions and Events <br /> Serial Entrepreneur, Social Worker
                        <br />
                        25 Years of Experience in Events Space <br />Government IT Infra Projects and Services​</p>
                </div>
                <div className="card">
                    <div className="icon-container">
                        <div className="img-container">
                            <img src={divya} alt="" />
                        </div>
                    </div>
                    <h3>Divya Arora</h3>
                    <p>Ex National Director<br /> AFS Intercultural Programs, India <br />25 years across various schools, not for profit <br /> organizations, hospitals, businesses and export houses​</p>
                </div>



            </div>


            {/* About us */}


        </div>
    )
}

export default Aboutuscontent
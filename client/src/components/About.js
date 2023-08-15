import React from "react";
import "../styles/aboutusmain.scss";
import { MouseParallax } from "react-just-parallax";
import Bhanu from "../images/bhanu.jpg";
import rama from "../images/rama.jpg";
import Neerja from "../images/neerja.jpg";
import divya from "../images/divya.jpg";
import Sachin from "../images/sachin.jpg";
import priti from "../images/priti.jpg";

const About = () => {
  return (
    <>
      <div className="aboutus">
        <MouseParallax
          enableOnTouchDevice
          isAbsolutelyPositioned
          strength={0.2}
        >
          <div className="bg-container" />
        </MouseParallax>
        <div className="about-content">
          <div className="about-heros-section">
            <div className="about-img"></div>
            <div className="about-text">
              <h1>About us</h1>
              <p>
                With a promise to deliver tech that helps our clients to drive
                business and growth, we at ProCohat Technologies are your
                trusted Technological Solutions and Products Partners. By
                combining our deep technical expertise and industry experience,
                we strive to offer digital solutions and tailor made SAAS
                products for businesses. We believe in equipping our clients
                with the answers for what’s next in Tech, beforehand. Our proven
                solutions offer a unique competitive advantage for our clients
                and empower them to envision beyond.
              </p>
            </div>
          </div>
        </div>

        {/* About us */}
      </div>
    </>
  );
};

export default About;

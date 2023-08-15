import React from "react";
import Layout from "../components/Layout";
import PowerFeature from "../components/PowerFeature";
import { MouseParallax } from "react-just-parallax";
import "../styles/solutions.scss";
const Solution = () => {
  return (
    <Layout>
      <div className="solution-section">
        <MouseParallax
          enableOnTouchDevice
          isAbsolutelyPositioned
          strength={0.2}
        >
          <div className="bg-container" />
        </MouseParallax>
        <div className="solution-content">
          <div className="fetaures-title">
            <h2>Powerful Features to Enhance Your Expo Experience</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <PowerFeature />
    </Layout>
  );
};

export default Solution;

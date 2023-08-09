import React from "react";
import Layout from "../components/Layout";
import PowerFeature from "../components/PowerFeature";
import ContactForm from "../components/Contactform";
import "../styles/solutions.scss"

const Solution = () => {
  return (
    <div className="solution">
      <Layout>
        <PowerFeature />
        <ContactForm />
      </Layout>
    </div>
  );
};

export default Solution;

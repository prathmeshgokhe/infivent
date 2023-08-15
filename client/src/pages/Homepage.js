import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Mainfeature from "../components/Mainfeature";
import Contact from "../components/Contact";

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <Mainfeature />
      <Contact />
    </Layout>
  );
};

export default Homepage;

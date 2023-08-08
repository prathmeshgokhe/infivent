import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ContactForm from "../components/Contactform";
import Mainfeatures from "../components/Mainfeatures";

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <Mainfeatures />
      <ContactForm />
    </Layout>
  );
};

export default Homepage;

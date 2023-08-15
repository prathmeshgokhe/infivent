import React from 'react'
import Layout from '../components/Layout'
import ContactForm from "../components/Contactform";
import Aboutuscontent from "../components/Aboutuscontent"
import "../styles/aboutusmain.scss"
const Aboutus = () => {
    return (
        <div className='aboutusmain'>
            <Layout>
                <Aboutuscontent />
                <ContactForm />
            </Layout>
        </div>
    )
}

export default Aboutus
import React, { useState, useRef } from 'react';
import "../styles/contactform.scss"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contactus from "../images/contact us.svg"



function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const formRef = useRef(null);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Handle form submission logic here
        console.log(formData);



        axios.post("https://infivent-backend-cbb2lrj71-aneesh-b-design.vercel.app/send_email", formData)
            .then(() => {
                toast.success('Message sent successfully', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }).then(() => { formRef.current.reset() })

    }


    return (
        <>
            <div className='contactform'>
                <div className='heading'>
                    <h2>Contact Us</h2>
                </div>
                <div className='main'>
                    <form ref={formRef} onSubmit={handleSubmit} className='form'>
                        <label>
                            {/* Name: */}
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder='Name' />
                        </label>
                        <label>
                            {/* Email: */}
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Email' />
                        </label>
                        <label>
                            {/* contact: */}
                            <input type="text" name="phoneNumber" value={formData.phoneNumber} placeholder="Phone Number" onChange={handleInputChange} />
                        </label>
                        <label>
                            {/* Message: */}
                            <textarea name="message" value={formData.message} onChange={handleInputChange} className='messages' placeholder='Write your message here...' />
                        </label>
                        <button type="submit" className='submit'>Submit</button>
                    </form>
                    <div className='illustration'>
                        <img
                            src={contactus}
                            height="450"
                            width="450"
                        />
                    </div>
                </div>

            </div>
            <ToastContainer />
        </>

    );
}

export default ContactForm;

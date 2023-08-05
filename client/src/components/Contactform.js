import React, { useState } from 'react';
import "../styles/contactform.scss"
import axios from 'axios';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

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

       

            axios.post("http://localhost:5000/send_email", formData)
            .then(()=> alert('Message sent successfully'))
              
        }
    

    return (
        <div className='contactform'>

            <form onSubmit={handleSubmit} className='form'>
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
                    <textarea name="message" value={formData.message} onChange={handleInputChange} className='message' placeholder='Write your message here...' />
                </label>
                <button type="submit" className='submit'>Submit</button>
            </form>
            <div className='illustration'>
                <h2>Contact Us</h2>
            </div>
        </div>
    );
}

export default ContactForm;

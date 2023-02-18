import React, {useState} from 'react';
import "./Contact.css";

const Contact = () => {


  return (
    <div className='contact section-p'>
        <div className='container'>
            <div className='contact-section'>
                <div className='section-title'>
                    <h3 className='text-brown'>contact <span className='text-dark'>me</span></h3>
                    <p className='text'>I offer the right solutions for your digital business.</p>
                </div>
            </div>

            <form className='contact-form mx-auto' >
                <div className='form-elem'>
                    <input type = "text"  className = "form-control" placeholder='Name' id = "name" />
                </div>
                <div className='form-elem'>
                    <input type = "text"  className = "form-control" placeholder='Email' id = "email" />
                </div>
                <div className='form-elem'>
                    <textarea rows = "2"  className = "form-control" placeholder='Message' id = "message"></textarea>
                </div>
                <button type = "submit" className='bg-brown text-white submit-btn fw-3 fs-22'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
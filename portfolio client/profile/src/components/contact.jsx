import React from 'react';
import Header from '../components/header';
import '../css/contactcss.css';

function Contact() {
    return (
        <div>
            <Header/>
            <h1>Contact Me</h1>
            <p className='line'>--------------------------------------------------------------------------------------</p>
            <input  type="text" name="name"  placeholder="Name" className='name' required/>
            <input  type="text" name="email"  placeholder="Email" className='eml' required/><br /><br />
            <textarea name="message" id="" cols="90" rows="6"  placeholder="Message" required></textarea><br/><br />
            <h4 className='h'>Get In Touch</h4>
            <p className='p1'>Email:fisamol990@gmail.com</p>
            <p className='p2'>Feel free to reach out! </p>
            <input type='submit' value='Send' className='btn'/>

        </div>
    );
}

export default Contact;
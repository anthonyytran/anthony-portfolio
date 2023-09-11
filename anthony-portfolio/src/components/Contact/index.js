import './index.scss';
import Loader from 'react-loaders';
import React, { useState, useEffect, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('contact_service', 'template_ooj0f7e', refForm.current, 'nyp4J0soNSf0P_J8EyWhS')
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again!');
                }
            );
    };

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            indx={15}
                        />
                    </h1>
                    <p>Feel free to use the below contact form to get in contact with me!</p>

                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required />
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Contact;
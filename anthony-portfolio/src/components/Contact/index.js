import './index.scss';
import Loader from 'react-loaders';
import React, { useState, useEffect, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('contact_service', 'contact_form', refForm.current, 'dLSkX7unlU8fSWDFm')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

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
                <div className="info-map">
                    Anthony Tran,
                    <br />
                    Melbourne,
                    <br />
                    Australia <br />
                    <br />
                    <span>anthony.tran99@hotmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[	-37.840935, 144.946457]} zoom={10} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[	-37.840935, 144.946457]}>
                            <Popup>
                                Born and raised! <br /> 
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Contact;
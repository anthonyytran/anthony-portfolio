import './index.scss';
import Loader from 'react-loaders';
import React from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);
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
                    <p>
                        Feel free to use the below contact form to get into contact with me! 
                    </p>

                    <div className='contact-form'>
                        <form>

                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="ubject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required>
                                </textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND">
                                </input>
                            </li>

                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Contact;
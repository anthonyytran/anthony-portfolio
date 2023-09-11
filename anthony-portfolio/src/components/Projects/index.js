import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        inx={15}
                        className={letterClass}
                    />
                </h1>
            </div>
        </div>
    );
}

export default Projects;
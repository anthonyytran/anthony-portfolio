import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { faJava, faHtml5, faCss3, faReact, faJsSquare, faPython } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        inx={15}
                        className={letterClass}
                    />
                </h1>
                <p> Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                </p>
                <p> Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                </p>
                <p> Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJava} style={{ color: '#DD0031' }} />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} style={{ color: '#F06529' }} />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} style={{ color: '#28A4D9' }} />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} style={{ color: '#5ED4F4' }} />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} style={{ color: '#EFD81D' }} />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faPython} style={{ color: '#28A4D9' }} />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default About;
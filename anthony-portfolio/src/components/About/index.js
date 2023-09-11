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
                    <p> Hello and welcome to my portfolio! My name is Anthony Tran, a passionate 
                        and driven Software Engineer with an undisputed love for technology and 
                        coding. Born and raised in Melbourne, Australia, I have been captivated 
                        by technology and programming since a very young age with my first programming
                        language being Scratch. Over the years, my love for technology has only grew
                        and I'm looking to pursue a career within the software development field.
                    </p>
                    <p> Currently pursuing my Bachelor of Information Technology at RMIT University,
                        I am dedicated to honing my software development skills in the hopes of 
                        becoming a fully fledged Software Engineer! 
                    </p>
                    <p> I have built this website as a way to demonstrate my coding skills and to show 
                        off personal projects that I have built over my career. 
                    </p>
                </div>



                <div className='stage-cube-cont'>
                    
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>

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


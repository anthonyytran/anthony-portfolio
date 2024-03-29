import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import {
  faJava,
  faHtml5,
  faCss3,
  faReact,
  faJsSquare,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              inx={15}
              className={letterClass}
            />
          </h1>
          <p>
            {' '}
            Greetings and thank you for visiting my portfolio! I'm Anthony Tran,
            a Software Engineer fueled by an unwavering passion for technology
            and coding. Born and raised in Melbourne, Australia, I completed my
            Bachelor of Information Technology at RMIT University. Beyond the
            realm of coding, I find joy in indulging my interests – be it
            immersing myself in video games, cheering for my favorite sports
            teams, or exploring the world of music.
          </p>
          <p>
            {' '}
            I have built this website to showcase personal projects that I have
            built over my career. Thanks for reading!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>

          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} style={{ color: '#DD0031' }} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} style={{ color: '#F06529' }} />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} style={{ color: '#28A4D9' }} />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} style={{ color: '#5ED4F4' }} />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} style={{ color: '#EFD81D' }} />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPython} style={{ color: '#28A4D9' }} />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

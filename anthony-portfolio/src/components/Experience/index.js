import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
import { useEffect, useState } from 'react'
import museLogo from '../../assets/images/muse.png'
import infernoLogo from '../../assets/images/inferno.png'

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div>
      <div className="container experience-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
            inx={15}
            className={letterClass}
          />
        </h1>

        <div className="experience-content">
          <h2 className="company-title">Muse Scene Lab</h2>
          <h3 className="position-title">Front-End Developer Intern</h3>
          <h3 className="position-date">Jul 2023 - Nov 2023</h3>
          <div className="company-logo">
            <img src={museLogo} alt="muse-logo" />
          </div>
          <div className="experience-description">
            <p>
              • Developed the music analysis platform with React for the
              front-End and AWS DynamoDB for the back-End.
              <br></br>• Implemented React-Vis library to provide graphical
              representations of various music performance related metrics such
              as tempo data and BPM.
              <br></br>• Authored CI/CD pipelines to build, test and deploy
              software using GitHub Actions.
              <br></br>• Languages and technologies used: JavaScript, React,
              REST API, JSON, AWS.
            </p>
          </div>
        </div>

        <div className="experience-content">
          <h2 className="company-title">Inferno Software and Data</h2>
          <h3 className="position-title">Software Developer Intern</h3>
          <h3 className="position-date">Nov 2022 - Feb 2023</h3>
          <div className="company-logo">
            <img src={infernoLogo} alt="inferno-logo" />
          </div>
          <div className="experience-description">
            <p>
              • Rewrote legacy software using modern technologies and redesigned
              APIs for modularity, maintainability and reusability.
              <br></br>• Collaborated with cross-functional teams to design,
              implement, and optimize robust software applications.
              <br></br>• Proficiently managed software business operations by
              excelling in client communication, sprint planning, PRD reviews,
              and prioritization.
              <br></br>• Languages and technologies used: JavaScript, React,
              MySQL, REST API
            </p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Experience

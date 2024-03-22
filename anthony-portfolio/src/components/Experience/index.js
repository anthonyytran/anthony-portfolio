import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
import { useEffect, useState } from 'react'
import LeavesComponent from '../Leaves'

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
        <LeavesComponent />

        <div className="experience-content">
          <h2 className="company-title">Muse Scene Lab</h2>
          <h3 className="position-title">Front-End Developer Intern</h3>
          <h3 className="position-date">Jul 2023 - Nov 2023</h3>
          <div className="company-logo">
            <img src="projects/companies/muse.png" alt="Company" />
          </div>
          <div className="experience-description">
            <p>
              • Developed the music analysis platform with React for the
              Front-End and AWS DynamoDB for the Back-End.
              <br></br>• Implemented React-Vis library to provide graphical
              representations of various music performance related metrics such
              as tempo data and BPM.
              <br></br>• Authored CI/CD pipelines to build, test and deploy
              software using GitHub Actions, reducing deployment time by 30%
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
            <img src="projects/companies/inferno.png" alt="Company" />
          </div>
          <div className="experience-description">
            <p>
              • Rewrote legacy software using modern technologies and redesigned
              APIs for modularity, maintainability and reusability.
              <br></br>• Collaborated with cross-functional teams to design,
              implement, and optimize robust software applications, reducing
              database query response times by 20%.
              <br></br>• Proficiently managed software business operations by
              excelling in client communication, sprint planning, and task
              prioritisation.
              <br></br>• Enhanced website performance by implementing caching
              strategies and integrating a content delivery network, resulting
              in notable reductions in page load times, as measured through web
              performance tools such as Google Lighthouse.
            </p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Experience

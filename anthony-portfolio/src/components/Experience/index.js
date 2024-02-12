import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
import { useEffect, useState } from 'react'

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
          <h2 className="company-title">
            Muse Scene Lab - Jul 2023 - Nov 2023
          </h2>
          <h3 className="position-title">Front-end Developer Intern</h3>
          <div className="experience-description">
            <p> test</p>
          </div>
        </div>
        <div className="experience-content">
          <h2 className="company-title">
            Inferno Software and Data - Nov 2022 - Feb 2023
          </h2>
          <h3 className="position-title">Software Engineer Intern</h3>
          <div className="experience-description">
            <p> test</p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Experience

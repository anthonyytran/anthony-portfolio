import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss';
import projectData from '../../data/projects.json';

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  console.log(projectData);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className="container projects-page">
        <h1 className = "page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            inx={15}
            className={letterClass}
          />
        </h1>
        {/* <div> {renderProjects()} </div> */}
      </div>
    <Loader type="pacman" />
    </>
  )
}
export default Projects

import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
import projectData from '../../data/projects.json'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  console.log(projectData)

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const renderProjects = (projects) => {
    return (
      <div className="images-container">
        {projects.map((proj, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img src={proj.cover} className="project-image" alt="project" />
              <div className="content">
                <p className="title">{proj.title}</p>
                <h4 className="description">{proj.description}</h4>
                <button className="btn" onClick={() => window.open(proj.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div>
      <div className="container projects-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            inx={15}
            className={letterClass}
          />
        </h1>
        <div> {renderProjects(projectData.projects)} </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Projects

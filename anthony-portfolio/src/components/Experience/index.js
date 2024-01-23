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
          <div className="container projects-page">
            <h1 className="page-title">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                inx={15}
                className={letterClass}
              />
            </h1>
          </div>
          <Loader type="pacman" />
        </div>
      )
    }
export default Experience;
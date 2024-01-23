import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faSuitcase, faBars, faClose, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import AnthonyLogo from '../../assets/images/Anthony-logos_transparent.png';
import { useState } from 'react';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={AnthonyLogo} alt="Logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact={true}
          onClick={() => setShowNav(false)} activeClassName="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact={true} 
          onClick={() => setShowNav(false)} activeClassName="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faInfoCircle} color="#4d4d4e" />
        </NavLink>
        <NavLink exact={true}
          onClick={() => setShowNav(false)} activeClassName="active" className="projects-link" to="/projects">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink exact={true} 
          onClick={() => setShowNav(false)}
          activeClassName="active" className="experience-link" to="/experience">
          <FontAwesomeIcon icon={faBuilding} color="#4d4d4e" />
        </NavLink>
        <NavLink exact={true} 
          onClick={() => setShowNav(false)}
          activeClassName="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#5065A8;"
          size="3x"
          className='close-icon'
        />
      </nav>
      <ul>
        <li>
          <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/anthonyytran">
            <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
          </a>

          <a target="_blank" rel='noreferrer' href="https://github.com/anthonyytran">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="ffd700"
        size="3x"
        className='hamburger-icon'
      />
    </div>
  )
};

export default Navbar;
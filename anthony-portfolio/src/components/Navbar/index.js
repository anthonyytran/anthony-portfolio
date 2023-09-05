import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope,} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../assets/images/Anthony-logos_transparent.png';

const Navbar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={Logo} alt="Logo" />
    </Link>
    <nav>
      <NavLink exact={true} activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact={true} activeClassName="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faInfoCircle} color="#4d4d4e" />
      </NavLink>
      <NavLink exact={true} activeClassName="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
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
  </div>
);

export default Navbar;